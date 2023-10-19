import { clearNecessarySpaceOnBacktick } from "./string.js";
import { getType } from "./dataType.js";

/**
 * @function typeErrorException
 * function to generate exception on typeError
 * @param {Any} any - any variabel whole type will be checke
 * @param {string} dataType - notify the data type that must be used
 */
export function typeErrorException(any, dataType) {
  const message = clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: typeError
    parameter with type '${dataType}' is can't fill with type '${getType(any)}'
  `);

  return message;
}

/**
 * @function maxValueException
 * function to generate exception on maxValue
 * @param {number} value - the value assigned to the function parameter
 * @param {number} maxValue - maximum value that can be given
 */
export function maxValueException(value, maxValue) {
  const message = clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: maxValue
    parameter with type '${getType(value)}' is can't greater than ${maxValue}
  `);

  return message;
}

/**
 * @function invalidValueException
 * function to generate exception on invalidValue
 * @param {string} expression - the string of logic expression
 */
export function invalidValueException(expression) {
  const message = clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: invalidValue
    invalid value at parameter with type '${getType(expression)}'
  `);

  return message;
}
