import { alphabets } from "./string.js";
import { arrayToString, stringToArray } from "./array.js";
import { arrayNumbers } from "./number.js";
import { getType, isArray, isNumber } from "./dataType.js";
import { typeErrorException } from "./exceptions.js";

/**
 * @function randomize
 * function to randomize item in the array
 * @param {Array} items - items to randomize
 * @returns {any} random item on items
 */
export function randomize(items) {
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
export function randomInteger(min = 0, max = 1) {
  if (!isNumber(min)) throw typeErrorException(min, "number");
  if (!isNumber(max)) throw typeErrorException(max, "number");
  if (max > Number.MAX_SAFE_INTEGER) throw maxValueException(max);

  return Math.floor(Math.random() * max) + min;
}

/**
 * @function randomFloat
 * function to get random float with digit between min - max value
 * @param {number} min - minimal range of value to be randomize
 * @param {number} max - maximal range of value to be randomize
 * @returns {number} a float that has been randomize by rules of range
 */
export function randomFloat(min = 0, max = 9) {
  if (!isNumber(min)) throw typeErrorException(min, "number");
  if (!isNumber(max)) throw typeErrorException(max, "number");
  if (max > Number.MAX_SAFE_INTEGER) throw maxValueException(max);

  return Number.parseFloat(`0.${ randomInteger(min, max) }`);
}

/**
 * @function randomString
 * function to get random string with spesific length of string
 * @param {number} len - length of string to be generate
 * @param {string} character - string format to randomize
 * @returns {string} string that has been randomize
 */
export function randomString(len = 1) {
  if (getType(len) !== "number") throw typeErrorException(len, "number");

  let result = "";
  let _alphabets = alphabets();
  let _numbers = arrayToString(arrayNumbers(0, 9), "");
  let characters = stringToArray(_alphabets + _numbers, "");

  for (let i = 0; i < len; i++) {
    result += randomize(characters);
  }

  return result;
}

/**
 * @function randomHexaCode
 * function to get random hexa code with spesific length of string
 * @param {number} len - length of string to be generate
 * @returns {string} string of hexacode that has been randomize
 */
export function randomHexaCode (len = 6) {
  if (getType(len) !== "number") throw typeErrorException(len, "number");
  
  let res = "";
  let chars = "0123456789abcdef".split("");
  
  for (let i = 1; i <= len; i++) {
    res += randomize(chars);
  }
  
  return res;
}

/**
 * @function randomColor
 * function to get random color of type rgb|rgba|hsl|hex
 * @param {string} colorType - string of type of color
 * @returns {string} string of color that has been generated
 */
export function randomColor (colorType = "rgb") {
  if (getType(colorType) !== "string") throw typeErrorException(colorTypes, "string");
  
  let colorTypes = ["rgb", "rgba", "hsl", "hex"];
  if (!colorTypes.includes(colorType.toLowerCase())) throw new Error(`invalid color type value '${ colorType }', please fill color type as ${ colorTypes.toString().replace(/\,/gm, "|") }`)
  
  let rgb = () => randomInteger(0, 255);
  let opacity = () => randomInteger(0, 1) === 1 ? 1 : randomFloat();
  
  switch (colorType.toLowerCase()) {
    case "rgb":
        return `rgb(${ rgb() }, ${ rgb() }, ${ rgb() })`;
      break;
    case "rgba":
        return `rgba(${ rgb() }, ${ rgb() }, ${ rgb() }, ${ opacity() })`;
      break;
    case "hex":
        return `#${ randomHexaCode(6).toUpperCase() }`;
      break;
    default:
        return null;
      break;
  }
}