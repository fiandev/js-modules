"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dataType = require("../utilities/dataType.js");
var _array = require("../utilities/array.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Tuple = exports["default"] = /*#__PURE__*/function () {
  function Tuple() {
    _classCallCheck(this, Tuple);
    this.values = [];
    var dumpValues = [];
    for (var _len = arguments.length, anythings = new Array(_len), _key = 0; _key < _len; _key++) {
      anythings[_key] = arguments[_key];
    }
    for (var _i = 0, _anythings = anythings; _i < _anythings.length; _i++) {
      var anything = _anythings[_i];
      if (!(0, _array.inArray)(anything, dumpValues)) {
        this.values.push(anything);
        dumpValues.push(anything);
      }
    }
  }
  _createClass(Tuple, [{
    key: "reset",
    value: function reset() {
      this.values = [];
      return this.values;
    }
  }, {
    key: "copy",
    value: function copy() {
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this.values.reverse();
      return this.values;
    }
  }]);
  return Tuple;
}();
//# sourceMappingURL=Tuple.js.map