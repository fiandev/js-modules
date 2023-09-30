"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alphabets = alphabets;
exports.clearNecessarySpaceOnBacktick = clearNecessarySpaceOnBacktick;
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @function clearNecessarySpaceOnBacktick
 * function to clear necessary space on multiline backtick string
 * @param {string} str - string to clear their space
 * @returns {string} clear string after trimed
 */
function clearNecessarySpaceOnBacktick(str) {
  if ((0, _dataType.getType)(str) !== "string") throw new Error("parameter str must be typeof string, ".concat((0, _dataType.getType)(str), " given"));
  var lines = str.split("\n");
  var result = "";
  var _iterator = _createForOfIteratorHelper(lines),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      result += "".concat(line.trimStart(), "\n");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}

/**
 * @function alphabets
 * function to generate alphabets
 * @param {Object} options - options to customize returned alphabets
 * @param {(string|string[])} options.except - exception characters
 * @returns {string} string of alphabets
 */
function alphabets(_ref) {
  var except = _ref.except;
  if ((0, _dataType.getType)(except) !== "string" || (0, _dataType.getType)(except) !== "array") throw (0, _exceptions.typeErrorException)(except, "string | array");
  var result = "";
  var exceptions = [];
  if ((0, _dataType.getType)(except) === "string") exceptions = except.split("");else exceptions = except;
  for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    var character = String.fromCharCode(i);
    if (!exceptions.includes(character)) result += character;
  }
  return result;
}
//# sourceMappingURL=string.js.map