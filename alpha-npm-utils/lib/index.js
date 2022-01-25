"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helloworld = require("./helloworld");

Object.keys(_helloworld).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helloworld[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helloworld[key];
    }
  });
});