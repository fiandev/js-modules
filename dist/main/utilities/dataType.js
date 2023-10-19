"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayOfDataType = arrayOfDataType;
exports.getIntermediateType = getIntermediateType;
exports.getType = getType;
exports.isArray = isArray;
exports.isArrayOfArray = isArrayOfArray;
exports.isArrayOfBoolean = isArrayOfBoolean;
exports.isArrayOfNull = isArrayOfNull;
exports.isArrayOfNumber = isArrayOfNumber;
exports.isArrayOfObject = isArrayOfObject;
exports.isArrayOfString = isArrayOfString;
exports.isBoolean = isBoolean;
exports.isContainTypes = isContainTypes;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isInteger = isInteger;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @function getType
 * function to get real data type 
 * @param {any} any - anyting to check the data type
 * @returns {string} data type name
 */
function getType(any) {
  if (_typeof(any) === "object" && Array.isArray(any)) return "array";
  if (_typeof(any) === "object" && !Array.isArray(any) && any === null) return "null";
  if (_typeof(any) === "object" && !Array.isArray(any) && any !== null) return "object";
  if (typeof any === "number" && Number.isNaN(any)) return "NaN";

  /**
   * if all conditions are met, return whatever value the 'typeof' function returns
   * excepted type of data {string,number,function|undefined|boolean}
   */
  return _typeof(any);
}
function getIntermediateType(any) {
  var type = getType(any);
  if (type === "number") {
    return isFloat(any) ? "float" : "integer";
  }
  if (type === "array") {
    if (isArrayOfString(any)) return "string[]";
    if (isArrayOfArray(any)) return "array[]";
    if (isArrayOfObject(any)) return "object[]";
    if (isArrayOfNull(any)) return "null[]";
    if (isArrayOfBoolean(any)) return "boolean[]";
    if (isArrayOfNumber(any)) return "number[]";
  }
  return type;
}

/**
 * @function isFunction
 * function to check the variable type is function or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isFunction(any) {
  return getType(any) === "function";
}

/**
 * @function isArray
 * function to check the variable type is array or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isArray(any) {
  return getType(any) === "array";
}

/**
 * @function arrayOfDataType
 * function to check if all items in the array is have same data type
 * @param {Array} array - the array whose item type data will be checked
 * @param {string} type - name of data type to checked
 * @returns {boolean}
 */
function arrayOfDataType(array, type) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  if (!isString(type)) throw new Error("parameter 2 must string, '".concat(getType(type), "' given !"));
  var _iterator = _createForOfIteratorHelper(array),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (getType(item) !== type) return false;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}

/**
 * @function isArrayOfString
 * function to check all items in array have string data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfString(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "string");
}

/**
 * @function isArrayOfNumber
 * function to check all items in array have number data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfNumber(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "number");
}

/**
 * @function isArrayOfObject
 * function to check all items in array have object data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfObject(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "object");
}

/**
 * @function isArrayOfArray
 * function to check all items in array have string data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfArray(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "array");
}

/**
 * @function isArrayOfNull
 * function to check all items in array have null data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfNull(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "null");
}

/**
 * @function isArrayOfBoolean
 * function to check all items in array have boolean data type or not
 * @param {Array} array - the array whose item type data will be checked
 * @returns {boolean}
 */
function isArrayOfBoolean(array) {
  if (!isArray(array)) throw new Error("parameter 1 must array, '".concat(getType(array), "' given !"));
  return arrayOfDataType(array, "boolean");
}

/**
 * @function isObject
 * function to check the variable type is object or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isObject(any) {
  return getType(any) === "object";
}

/**
 * @function isNull
 * function to check the variable type is null or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isNull(any) {
  return getType(any) === "null";
}

/**
 * @function isUndefined
 * function to check the variable type is undefined or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isUndefined(any) {
  return getType(any) === "undefined";
}

/**
 * @function isBoolean
 * function to check the variable type is boolean or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isBoolean(any) {
  return getType(any) === "";
}

/**
 * @function isNumber
 * function to check the variabel is number or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isNumber(any) {
  return getType(any) === "number";
}

/**
 * @function isInteger
 * function to check the number is integer or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isInteger(any) {
  return getType(any) === "number" && any % 1 === 0;
}

/**
 * @function isInteger
 * function to check the number is float or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isFloat(any) {
  return getType(any) === "number" && any % 1 > 0;
}

/**
 * @function isString
 * function to check the variable type is string or not
 * @param {any} any - anyting to check the data type
 * @returns {boolean}
 */
function isString(any) {
  return getType(any) === "string";
}
function isContainTypes(any, types) {
  if (!["string", "array"].includes(getType(types))) throw "parameter 2 must be type string|array, '".concat(getType(types), "'' given !");
  var dataTypes = [];
  var SPLITTER_REGEX = /(\||\,|\s)/g;
  if (isString(types)) dataTypes = types.split(SPLITTER_REGEX);else dataTypes = types;
  return dataTypes.includes(getIntermediateType(any));
}
//# sourceMappingURL=dataType.js.map