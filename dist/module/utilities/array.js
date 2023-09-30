import { getType, isUndefined, isArray } from "./dataType.js";
import { typeErrorException, invalidValueException } from "./exceptions.js";

/**
 * @function stringToArray
 * function to split string to array
 * @param {string} str - string to split
 * @param {string} [splitter=] splitter - character to split the string to array
 * @returns {any} random item on items
 */
export function stringToArray(str, splitter = "") {
  if (getType(str) !== "string") throw typeErrorException(arr, "string");
  if (getType(splitter) !== "string") throw typeErrorException(arr, "string");
  return str.split(splitter);
}

/**
 * @function arrayToString
 * function to transform array to string
 * @param {Array} arr - array to transform
 * @returns {string} string of result
 */
export function arrayToString(arr) {
  if (getType(except) !== "array") throw typeErrorException(arr, "array");
  return arr.toString().replace(/\,/g, "");
}

/**
 * @function inArray
 * function to check item is contained in the array
 * @param {any} needle - anything to be contained in the array
 * @param {Array} haystack - the array with included items
 * @returns {boolean}
 */
export function inArray(needle, haystack) {
  if (!isUndefined(needle) && isUndefined(haystack) || !isUndefined(haystack) && !isArray(haystack)) throw typeErrorException(haystack, "array");
  for (let i = 0; i < haystack.length; i++) {
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
export function countArrayDimention(array) {
  if (!isArray(array)) throw typeErrorException(array, "array");
  let counter = array.length;
  for (let item of array) {
    counter += isArray(item) ? countArrayDimention(item) : 0;
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
export function splitArray(array, numberOfParts = 1) {
  if (!isArray(array)) throw typeErrorException(array, "array");
  if (!isInteger(numberOfParts)) throw typeErrorException(numberOfParts, "number|integer");
  if (numberOfParts <= 0) throw `the numberOfParts must be greater than 0`;
  const partLength = Math.ceil(array.length / numberOfParts);
  const resultParts = [];
  for (let i = 0; i < numberOfParts; i++) {
    const start = i * partLength;
    const end = (i + 1) * partLength;
    resultParts.push(array.slice(start, end));
  }
  return resultParts;
}
//# sourceMappingURL=array.js.map