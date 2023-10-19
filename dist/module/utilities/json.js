import { getType, isContainTypes } from "./dataType.js";
import { typeErrorException } from "./exceptions.js";

/**
 * @function json_encode
 * function to encode array|object into string of json
 * @param {any} any - any variabel to encode
 * @param {function} replacer - optional replacer function
 * @param {number} lineSpace - line space after enter
 * @returns {string} string of json
 */
export function json_encode(any, replacer = null, lineSpace = 2) {
  if (!["array", "object"].includes(getType(any))) throw typeErrorException(any, "array|object");
  if (!["function", "null"].includes(getType(replacer))) throw typeErrorException(any, "function|null");
  if (!isContainTypes(lineSpace, "number|integer")) throw typeErrorException(any, "function|null");
  return JSON.stringify(any, replacer, lineSpace);
}

/**
 * @function json_decode
 * function to parsing string of json into array|object
 * @param {string} json - string of json tobe parsing
 * @returns {array|object} result of string of json parsing
 */
export function json_decode(json) {
  if (!["string"].includes(getType(json))) throw typeErrorException(json, "string");
  try {
    return JSON.parse(json);
  } catch (err) {
    throw new Error("invalid string of json");
  }
}
//# sourceMappingURL=json.js.map