"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json_decode = json_decode;
exports.json_encode = json_encode;
var _dataType = require("./dataType.js");
var _exceptions = require("./exceptions.js");
/**
 * @function json_encode
 * function to encode array|object into string of json
 * @param {any} any - any variabel to encode
 * @param {function} replacer - optional replacer function
 * @param {number} lineSpace - line space after enter
 * @returns {string} string of json
 */
function json_encode(any) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var lineSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  if (!["array", "object"].includes((0, _dataType.getType)(any))) throw (0, _exceptions.typeErrorException)(any, "array|object");
  if (!["function", "null"].includes((0, _dataType.getType)(replacer))) throw (0, _exceptions.typeErrorException)(any, "function|null");
  if (!(0, _dataType.isContainTypes)(lineSpace, "number|integer")) throw (0, _exceptions.typeErrorException)(any, "function|null");
  return JSON.stringify(any, replacer, lineSpace);
}

/**
 * @function json_decode
 * function to parsing string of json into array|object
 * @param {string} json - string of json tobe parsing
 * @returns {array|object} result of string of json parsing
 */
function json_decode(json) {
  if (!["string"].includes((0, _dataType.getType)(json))) throw (0, _exceptions.typeErrorException)(json, "string");
  try {
    return JSON.parse(json);
  } catch (err) {
    throw new Error("invalid string of json");
  }
}
//# sourceMappingURL=json.js.map