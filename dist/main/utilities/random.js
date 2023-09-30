"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInteger = randomInteger;
exports.randomString = randomString;
exports.randomize = randomize;
var _string = require("./string.js");
var _array = require("./array.js");
var _number = require("./number.js");
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
/**
 * @function randomize
 * function to randomize item in the array
 * @param {Array} items - items to randomize
 * @returns {any} random item on items
 */
function randomize(items) {
  if (!(0, _dataType.isArray)(items)) throw (0, _exceptions.typeErrorException)(items, "array");
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * @function randomInteger
 * function to get random integer between min - max value
 * @param {number} min - minimal range of value to be randomize
 * @param {number} max - maximal range of value to be randomize
 * @returns {number} a integer that has been randomize by rules of range
 */
function randomInteger() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!(0, _dataType.isNumber)(min)) throw (0, _exceptions.typeErrorException)(min, "number");
  if (!(0, _dataType.isNumber)(max)) throw (0, _exceptions.typeErrorException)(max, "number");
  if (max > Number.MAX_SAFE_INTEGER) throw maxValueException(max);
  return Math.floor(Math.random() * max) + min;
}

/**
 * @function randomString
 * function to get random string with spesific length of string
 * @param {number} len - length of string to be generate
 * @param {string} character - string format to randomize
 * @returns {string} string that has been randomize
 */
function randomString() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if ((0, _dataType.getType)(len) !== "number") throw (0, _exceptions.typeErrorException)(items, "number");
  var result = "";
  var _alphabets = (0, _string.alphabets)();
  var _numbers = (0, _array.arrayToString)((0, _number.arrayNumbers)(0, 9), "");
  var characters = stringToArray(_alphabets + _numbers, "");
  for (var i = 0; i < 1; i++) {
    result += randomize(characters);
  }
  return result;
}
//# sourceMappingURL=random.js.map