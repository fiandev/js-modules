"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteObjectProperties = deleteObjectProperties;
exports.objectEntries = objectEntries;
exports.objectKeys = objectKeys;
exports.objectValues = objectValues;
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @function objectKeys
 * function to get all keys of the object
 * @param {Object} object - the object whose all keys will be gotten
 * @returns {Array} array of object keys
 */
function objectKeys(object) {
  if (!(0, _dataType.isObject)(object)) throw (0, _exceptions.typeErrorException)(object, "object");
  return Object.keys(object);
}

/**
 * @function objectValues
 * function to get all values of the object
 * @param {Object} object - the object whose all values will be gotten
 * @returns {Array} array of object values
 */
function objectValues(object) {
  if (!(0, _dataType.isObject)(object)) throw (0, _exceptions.typeErrorException)(object, "object");
  return Object.values(object);
}

/**
 * @function objectValues
 * function to get all keys & values of the object
 * @param {Object} object - the object whose all keys & values will be gotten
 * @returns {Array} array of object keys & values
 */
function objectEntries(object) {
  if (!(0, _dataType.isObject)(object)) throw (0, _exceptions.typeErrorException)(object, "object");
  return Object.entries(object);
}

/**
 * @function delete
 * function to get random string with spesific length of string
 * @param {Object} object - the object whose properties will be delete
 * @param {string|string[]} props - properties of object to delete
 * @returns {Object} object with properties that have been deleted
 */
function deleteObjectProperties(object, props) {
  if (!(0, _dataType.isObject)(object) && !(0, _dataType.isUndefined)(props)) throw (0, _exceptions.typeErrorException)(object, "object");
  if (!(0, _dataType.isString)(props) && !(0, _dataType.isArray)(props)) throw (0, _exceptions.typeErrorException)(object, "string|array");
  var properties = [];
  if ((0, _dataType.isString)(props)) properties.push(props);
  if ((0, _dataType.isArray)(props)) {
    if ((0, _dataType.isArrayOfString)(props)) properties = props;else throw (0, _exceptions.typeErrorException)(props, "string[]");
  }
  var _iterator = _createForOfIteratorHelper(properties),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;
      if (!(0, _dataType.isUndefined)(object[property])) delete object[property];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return object;
}
//# sourceMappingURL=object.js.map