"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidValueException = invalidValueException;
exports.maxValueException = maxValueException;
exports.typeErrorException = typeErrorException;
var _string = require("./string.js");
var _dataType = require("./dataType.js");
/**
 * @function typeErrorException
 * function to generate exception on typeError
 * @param {Any} any - any variabel whole type will be checke
 * @param {string} dataType - notify the data type that must be used
 */
function typeErrorException(any, dataType) {
  var message = (0, _string.clearNecessarySpaceOnBacktick)("\n    [ERROR]\n    type: typeError\n    parameter with type '".concat(dataType, "' is can't fill with type '").concat((0, _dataType.getType)(any), "'\n  "));
  return message;
}

/**
 * @function maxValueException
 * function to generate exception on maxValue
 * @param {number} value - the value assigned to the function parameter
 * @param {number} maxValue - maximum value that can be given
 */
function maxValueException(value, maxValue) {
  var message = (0, _string.clearNecessarySpaceOnBacktick)("\n    [ERROR]\n    type: maxValue\n    parameter with type '".concat((0, _dataType.getType)(value), "' is can't greater than ").concat(maxValue, "\n  "));
  return message;
}

/**
 * @function invalidValueException
 * function to generate exception on invalidValue
 * @param {string} expression - the string of logic expression
 */
function invalidValueException(expression) {
  var message = (0, _string.clearNecessarySpaceOnBacktick)("\n    [ERROR]\n    type: invalidValue\n    invalid value at parameter with type '".concat((0, _dataType.getType)(expression), "'\n  "));
  return message;
}
//# sourceMappingURL=exceptions.js.map