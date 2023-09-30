import { isObject, isString, isArray, isArrayOfString, isUndefined } from "./dataType.js";
import { typeErrorException } from "./exceptions.js";

/**
 * @function objectKeys
 * function to get all keys of the object
 * @param {Object} object - the object whose all keys will be gotten
 * @returns {Array} array of object keys
 */
export function objectKeys(object) {
  if (!isObject(object)) throw typeErrorException(object, "object");
  return Object.keys(object);
}

/**
 * @function objectValues
 * function to get all values of the object
 * @param {Object} object - the object whose all values will be gotten
 * @returns {Array} array of object values
 */
export function objectValues(object) {
  if (!isObject(object)) throw typeErrorException(object, "object");
  return Object.values(object);
}

/**
 * @function objectValues
 * function to get all keys & values of the object
 * @param {Object} object - the object whose all keys & values will be gotten
 * @returns {Array} array of object keys & values
 */
export function objectEntries(object) {
  if (!isObject(object)) throw typeErrorException(object, "object");
  return Object.entries(object);
}

/**
 * @function delete
 * function to get random string with spesific length of string
 * @param {Object} object - the object whose properties will be delete
 * @param {string|string[]} props - properties of object to delete
 * @returns {Object} object with properties that have been deleted
 */
export function deleteObjectProperties(object, props) {
  if (!isObject(object) && !isUndefined(props)) throw typeErrorException(object, "object");
  if (!isString(props) && !isArray(props)) throw typeErrorException(object, "string|array");
  let properties = [];
  if (isString(props)) properties.push(props);
  if (isArray(props)) {
    if (isArrayOfString(props)) properties = props;else throw typeErrorException(props, "string[]");
  }
  for (let property of properties) {
    if (!isUndefined(object[property])) delete object[property];
  }
  return object;
}
//# sourceMappingURL=object.js.map