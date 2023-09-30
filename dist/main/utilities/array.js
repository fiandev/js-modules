"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayToString = arrayToString;
exports.countArrayDimention = countArrayDimention;
exports.inArray = inArray;
exports.splitArray = splitArray;
exports.stringToArray = stringToArray;
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @function stringToArray
 * function to split string to array
 * @param {string} str - string to split
 * @param {string} [splitter=] splitter - character to split the string to array
 * @returns {any} random item on items
 */
function stringToArray(str) {
  var splitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if ((0, _dataType.getType)(str) !== "string") throw (0, _exceptions.typeErrorException)(arr, "string");
  if ((0, _dataType.getType)(splitter) !== "string") throw (0, _exceptions.typeErrorException)(arr, "string");
  return str.split(splitter);
}

/**
 * @function arrayToString
 * function to transform array to string
 * @param {Array} arr - array to transform
 * @returns {string} string of result
 */
function arrayToString(arr) {
  if ((0, _dataType.getType)(except) !== "array") throw (0, _exceptions.typeErrorException)(arr, "array");
  return arr.toString().replace(/\,/g, "");
}

/**
 * @function inArray
 * function to check item is contained in the array
 * @param {any} needle - anything to be contained in the array
 * @param {Array} haystack - the array with included items
 * @returns {boolean}
 */
function inArray(needle, haystack) {
  if (!(0, _dataType.isUndefined)(needle) && (0, _dataType.isUndefined)(haystack) || !(0, _dataType.isUndefined)(haystack) && !(0, _dataType.isArray)(haystack)) throw (0, _exceptions.typeErrorException)(haystack, "array");
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

/**
 * @function countArrayDimention
 * function to check dimension of the array
 * @param {Array} array - the array whose dimension will be counted
 * @returns {number} total dimension of the array
 */
function countArrayDimention(array) {
  if (!(0, _dataType.isArray)(array)) throw (0, _exceptions.typeErrorException)(array, "array");
  var counter = array.length;
  var _iterator = _createForOfIteratorHelper(array),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      counter += (0, _dataType.isArray)(item) ? countArrayDimention(item) : 0;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return counter;
}

/**
 * @function splitArray
 * function to split an array into several parts
 * @param {Array} array - atray whole will be splitted
 * @param {number} numberOfParts - number of parts
 * @returns {Array} splitted array
 */
function splitArray(array) {
  var numberOfParts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!(0, _dataType.isArray)(array)) throw (0, _exceptions.typeErrorException)(array, "array");
  if (!isInteger(numberOfParts)) throw (0, _exceptions.typeErrorException)(numberOfParts, "number|integer");
  if (numberOfParts <= 0) throw "the numberOfParts must be greater than 0";
  var partLength = Math.ceil(array.length / numberOfParts);
  var resultParts = [];
  for (var i = 0; i < numberOfParts; i++) {
    var start = i * partLength;
    var end = (i + 1) * partLength;
    resultParts.push(array.slice(start, end));
  }
  return resultParts;
}
//# sourceMappingURL=array.js.map