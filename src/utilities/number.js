import { getType, isFloat } from "./dataType.js";
import {
  typeErrorException,
  invalidValueException,
  maxValueException,
} from "./exceptions.js";

/**
 * @function arrayNumbers
 * function to randomize item in the array
 * @param {number} start - the start number of iteration
 * @param {nunber} end - the end number of iteration
 * @returns {any} random item on items
 */
export function arrayNumbers(start, end) {
  if (getType(start) !== "number") throw typeErrorException(start, "number");
  if (getType(end) !== "number") throw typeErrorException(end, "number");
  if (end < start) throw invalidValueException(`${end} < ${start}`);

  const LIMIT = end > Number.end_SAFE_INTEGER ? Number.end_SAFE_INTEGER : end;
  let integers = [];

  if (end > LIMIT) throw maxValueException(end, LIMIT);

  for (let value = start; value < end; value++) {
    integers.push(value);
  }

  return integers;
}

/**
 * @function isEven
 * function to check number is even or not
 * @param {string} number - number to check
 * @returns {boolean} result of checking number
 */
export function isEven (number) {
  if (getType(number) !== "number") throw typeErrorException(number, "number");
  return number % 2 === 0;
}

/**
 * @function isOdd
 * function to check number is odd or not
 * @param {string} number - number to check
 * @returns {boolean} result of checking number
 */
export function isOdd (number) {
  if (getType(number) !== "number") throw typeErrorException(number, "number");
  return number % 2 === 0;
}

/**
 * @function isPrime
 * function to check number is odd or not
 * @param {string} number - number to check
 * @returns {boolean} result of checking number
 */
function isPrime(number) {
  if (getType(number) !== "number" || isFloat(number)) throw typeErrorException(number, "number");
  if (number <= 1) return false;
  if (number <= 3) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}