"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonEncode = jsonEncode;
var _dataType = require("./dataType.js");
function jsonEncode(any) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var lineSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  if (!["array", "object"].includes((0, _dataType.getType)(any))) throw typeErrorException(any, "array|object");
  if (!["function", "null"].includes((0, _dataType.getType)(replacer))) throw typeErrorException(any, "function|null");
  if (!(0, _dataType.isContainTypes)(lineSpace, "number|integer")) throw typeErrorException(any, "function|null");
  return JSON.stringify(any, replacer, lineSpace);
}
//# sourceMappingURL=json.js.map