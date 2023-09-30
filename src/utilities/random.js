import { alphabets } from "./string.js";
import { arrayToString } from "./array.js";
import { arrayNumbers } from "./number.js";
import { getType, isArray, isNumber } from "./dataType.js";
import { typeErrorException } from "./exceptions.js";

/**
 * @function randomize
 * function to randomize item in the array
 * @param {Array} items - items to randomize
 * @returns {any} random item on items
 */
export function randomize (items) {
  if (!isArray(items)) throw typeErrorException(items, "array");
  
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * @function randomInteger
 * function to get random integer between min - max value
 * @param {number} min - minimal range of value to be randomize
 * @param {number} max - maximal range of value to be randomize
 * @returns {number} a integer that has been randomize by rules of range
 */
export function randomInteger (min = 0, max = 1) {
  if (!isNumber(min)) throw typeErrorException(min, "number");
  if (!isNumber(max)) throw typeErrorException(max, "number");
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
export function randomString (len = 1) {
  if (getType(len) !== "number") throw typeErrorException(items, "number");
  
  let result = "";
  let _alphabets = alphabets();
  let _numbers = arrayToString(arrayNumbers(0, 9), "");
  let characters = stringToArray(_alphabets + _numbers, "");
  
  for (let i = 0; i < 1; i++) {
    result += randomize(characters);
  }
  
  return result;
}