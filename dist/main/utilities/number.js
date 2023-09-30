"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayNumbers = arrayNumbers;
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
/**
 * @function arrayNumbers
 * function to randomize item in the array
 * @param {number} start - the start number of iteration
 * @param {nunber} end - the end number of iteration
 * @returns {any} random item on items
 */
function arrayNumbers(start, end) {
  if ((0, _dataType.getType)(start) !== "number") throw (0, _exceptions.typeErrorException)(start, "number");
  if ((0, _dataType.getType)(end) !== "number") throw (0, _exceptions.typeErrorException)(end, "number");
  if (end < start) throw (0, _exceptions.invalidValueException)("".concat(end, " < ").concat(start));
  var LIMIT = end > Number.end_SAFE_INTEGER ? Number.end_SAFE_INTEGER : end;
  var integers = [];
  if (end > LIMIT) throw (0, _exceptions.maxValueException)(end, LIMIT);
  for (var value = start; value < end; value++) {
    integers.push(value);
  }
  return integers;
}
//# sourceMappingURL=number.js.map