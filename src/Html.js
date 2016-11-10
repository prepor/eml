// Generated by BUCKLESCRIPT VERSION 1.2.1 , PLEASE EDIT WITH CARE
'use strict';

var Block    = require("bs-platform/lib/js/block");
var Text     = require("virtual-dom/vnode/vtext");
var Json     = require("./json");
var Curry    = require("bs-platform/lib/js/curry");
var $$Array  = require("bs-platform/lib/js/array");
var $$String = require("bs-platform/lib/js/string");
var List     = require("bs-platform/lib/js/list");
var Browser  = require("./browser");
var Node     = require("virtual-dom/vnode/vnode");

function tag(n, attrs, children, clb) {
  var attrs$prime = { };
  List.iter(function (param) {
        if (param.tag) {
          var match = param[0];
          var decoder = match[1];
          return attrs$prime[match[0]] = function (e) {
                  var match = Curry._2(Json.Decoder[/* decode_value */18], decoder, e);
                  if (match.tag) {
                    console.log(/* tuple */[
                          "Error while event handling:",
                          match[0]
                        ]);
                    return /* () */0;
                  }
                  else {
                    return Curry._1(clb, match[0]);
                  }
                };
        }
        else {
          var match$1 = param[0];
          var v = match$1[1];
          var k = match$1[0];
          switch (v.tag | 0) {
            case 1 : 
                return attrs$prime[k] = Browser.boolean_of_bool(v[0]);
            case 0 : 
            case 2 : 
                return attrs$prime[k] = v[0];
            
          }
        }
      }, attrs);
  var children$prime = List.map(function (v) {
        return Curry._1(v, clb);
      }, children);
  return new Node(n, attrs$prime, $$Array.of_list(children$prime));
}

function text(txt, _) {
  return new Text(txt);
}

function draw(view, clb) {
  return Curry._1(view, clb);
}

function div(attrs, children) {
  return function (param) {
    return tag("div", attrs, children, param);
  };
}

function section(attrs, children) {
  return function (param) {
    return tag("section", attrs, children, param);
  };
}

function a(attrs, children) {
  return function (param) {
    return tag("a", attrs, children, param);
  };
}

function header(attrs, children) {
  return function (param) {
    return tag("header", attrs, children, param);
  };
}

function footer(attrs, children) {
  return function (param) {
    return tag("footer", attrs, children, param);
  };
}

function h1(attrs, children) {
  return function (param) {
    return tag("h1", attrs, children, param);
  };
}

function input(attrs, children) {
  return function (param) {
    return tag("input", attrs, children, param);
  };
}

function button(attrs, children) {
  return function (param) {
    return tag("button", attrs, children, param);
  };
}

function label(attrs, children) {
  return function (param) {
    return tag("label", attrs, children, param);
  };
}

function ul(attrs, children) {
  return function (param) {
    return tag("ul", attrs, children, param);
  };
}

function li(attrs, children) {
  return function (param) {
    return tag("li", attrs, children, param);
  };
}

function strong(attrs, children) {
  return function (param) {
    return tag("strong", attrs, children, param);
  };
}

function p(attrs, children) {
  return function (param) {
    return tag("p", attrs, children, param);
  };
}

function span(attrs, children) {
  return function (param) {
    return tag("span", attrs, children, param);
  };
}

function obj_of_alist(l) {
  var obj = { };
  List.iter(function (param) {
        return obj[param[0]] = param[1];
      }, l);
  return obj;
}

function string(k, v) {
  return /* Attribute */Block.__(0, [/* tuple */[
              k,
              /* String */Block.__(0, [v])
            ]]);
}

function bool(k, v) {
  return /* Attribute */Block.__(0, [/* tuple */[
              k,
              /* Bool */Block.__(1, [v])
            ]]);
}

function id(v) {
  return string("id", v);
}

function href(v) {
  return string("href", v);
}

function className(v) {
  return string("className", v);
}

function style(v) {
  return /* Attribute */Block.__(0, [/* tuple */[
              "style",
              /* Obj */Block.__(2, [obj_of_alist(v)])
            ]]);
}

function placeholder(v) {
  return string("placeholder", v);
}

function autofocus(v) {
  return bool("autofocus", v);
}

function value(v) {
  return string("value", v);
}

function name(v) {
  return string("name", v);
}

function type$prime(v) {
  return string("type", v);
}

function for$prime(v) {
  return string("htmlFor", v);
}

function checked(v) {
  return bool("checked", v);
}

function hidden(v) {
  return bool("hidden", v);
}

function classList(l) {
  return string("className", $$String.concat(" ", List.map(function (param) {
                      return param[0];
                    }, List.filter(function (param) {
                            return param[1];
                          })(l))));
}

function on($$event, d) {
  return /* Event */Block.__(1, [/* tuple */[
              "on" + $$event,
              d
            ]]);
}

function onClick(v) {
  return on("click", Curry._1(Json.Decoder[/* succeed */10], v));
}

function onInput(v) {
  return on("input", Curry._2(Json.Decoder[/* map */14], v, Curry._2(Json.Decoder[/* at */13], /* :: */[
                      "target",
                      /* :: */[
                        "value",
                        /* [] */0
                      ]
                    ], Json.Decoder[/* string */0])));
}

function onDoubleClick(v) {
  return on("dbclick", Curry._1(Json.Decoder[/* succeed */10], v));
}

function onBlur(v) {
  return on("blur", Curry._1(Json.Decoder[/* succeed */10], v));
}

var keyCode = Curry._1(Json.Decoder[/* object1 */11], Curry._2(Json.Decoder[/* := */9], "keyCode", Json.Decoder[/* int */1]));

var Events = /* module */[
  /* on */on,
  /* onClick */onClick,
  /* onInput */onInput,
  /* onDoubleClick */onDoubleClick,
  /* onBlur */onBlur,
  /* keyCode */keyCode
];

var Tags = [
  div,
  a,
  header,
  footer,
  h1,
  input,
  button,
  label,
  ul,
  li,
  strong,
  p,
  span,
  section
];

var Attributes = [
  id,
  href,
  className,
  style,
  placeholder,
  autofocus,
  value,
  name,
  type$prime,
  for$prime,
  checked,
  hidden,
  classList
];

exports.draw          = draw;
exports.Tags          = Tags;
exports.text          = text;
exports.Attributes    = Attributes;
exports.Events        = Events;
exports.div           = div;
exports.a             = a;
exports.header        = header;
exports.footer        = footer;
exports.h1            = h1;
exports.input         = input;
exports.button        = button;
exports.label         = label;
exports.ul            = ul;
exports.li            = li;
exports.strong        = strong;
exports.p             = p;
exports.span          = span;
exports.section       = section;
exports.on            = on;
exports.onClick       = onClick;
exports.onInput       = onInput;
exports.onDoubleClick = onDoubleClick;
exports.onBlur        = onBlur;
exports.keyCode       = keyCode;
exports.id            = id;
exports.href          = href;
exports.className     = className;
exports.style         = style;
exports.placeholder   = placeholder;
exports.autofocus     = autofocus;
exports.value         = value;
exports.name          = name;
exports.type$prime    = type$prime;
exports.for$prime     = for$prime;
exports.checked       = checked;
exports.hidden        = hidden;
exports.classList     = classList;
/* keyCode Not a pure module */
