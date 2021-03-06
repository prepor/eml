(* type 'flags program = 'flags -> unit *)

(* module type Program = sig *)
(*   type flags *)
(*   val start : string -> flags -> unit *)
(* end *)

(* module type SimpleProgram = sig *)
(*        type flags *)
(*        type msg *)
(*        type model *)
(*        val init : flags -> model *)
(*        val update : model -> msg -> model *)
(*        val view : model -> msg Html.t *)
(* end *)

(* module MakeSimple(M : SimpleProgram) : Program with type flags := M.flags *)
(* = struct *)
(*   let start dom_id flags = *)
(*     let m = M.init flags in *)
(*     let vdom = M.view m in *)
(*     let html = Vdom.create_element vdom in *)
(*     match Js.Null.to_opt @@ Dom.get_by_id Dom.document "main" with *)
(*     | Some doc -> doc##appendChild html *)
(*     | None -> Js.log (Printf.sprintf "Can't find node with id %s" dom_id) *)
(* end *)

(* let updater ~init ~vdom ~view ~update ~root = *)
(*   let model = ref init in *)
(*   let vdom = ref vdom in *)
(*   fun clb msg -> *)
(*     let model' = update !model msg in *)
(*     let vdom' = view model' clb in *)
(*     let diff = Vdom.diff !vdom vdom' in *)
(*     model := model'; *)
(*     vdom := vdom'; *)
(*     Vdom.patch root diff *)

let updater_loop ~init ~vdom ~view ~update ~root ~clb ~ch =
  let model = ref init in
  let vdom = ref vdom in
  let rec tick () =
    let open Orme_task in
    Orme_channel.read ch
    >>= fun msg ->
    let model' = update !model msg in
    let vdom' = Orme_html.draw (view model') clb in
    let diff = Orme_vdom.diff !vdom vdom' in
    model := model';
    vdom := vdom';
    Orme_vdom.patch root diff;
    tick () in
  tick ()

let simple dom_id ~init ~view ~update =
  let ch = Orme_channel.create () in
  let clb msg = Orme_channel.write ch msg in
  let vdom = Orme_html.draw (view init) clb in
  let root = Orme_vdom.create_element vdom in
  updater_loop ~init ~vdom ~view ~update ~clb ~ch ~root |> ignore;
  match Js.Null.to_opt @@ Orme_browser.get_by_id Orme_browser.document dom_id with
  | Some doc ->
    doc##appendChild root
  (* Html.callback := updater ~init ~vdom ~root ~view ~update *)
  | None -> Js.log (Printf.sprintf "Can't find node with id %s" dom_id)
