import { getType } from "./dataType.js";
import { typeErrorException } from "./exceptions.js";

/**
 * @function clearNecessarySpaceOnBacktick
 * function to clear necessary space on multiline backtick string
 * @param {string} str - string to clear their space
 * @returns {string} clear string after trimed
 */
export function clearNecessarySpaceOnBacktick(str) {
  if (getType(str) !== "string")
    throw new Error(
      `parameter str must be typeof string, ${getType(str)} given`,
    );

  let lines = str.split("\n");
  let result = "";

  for (let line of lines) {
    result += `${line.trimStart()}\n`;
  }
  return result;
}

/**
 * @function alphabets
 * function to generate alphabets
 * @param {Object} options - options to customize returned alphabets
 * @param {(string|string[])} options.except - exception characters
 * @returns {string} string of alphabets
 */
export function alphabets(args = {}) {
  const { except = [] } = args;
  if (getType(except) !== "string" && getType(except) !== "array")
    throw typeErrorException(except, "string | array");

  let result = "";
  let exceptions = [];

  if (getType(except) === "string") exceptions = except.split("");
  else exceptions = except;

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    let character = String.fromCharCode(i);

    if (!exceptions.includes(character)) result += character;
  }

  return result;
}
