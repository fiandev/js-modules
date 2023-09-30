import { getType, isContainTypes } from "./dataType.js";
export function jsonEncode(any, replacer = null, lineSpace = 2) {
  if (!["array", "object"].includes(getType(any))) throw typeErrorException(any, "array|object");
  if (!["function", "null"].includes(getType(replacer))) throw typeErrorException(any, "function|null");
  if (!isContainTypes(lineSpace, "number|integer")) throw typeErrorException(any, "function|null");
  return JSON.stringify(any, replacer, lineSpace);
}
//# sourceMappingURL=json.js.map