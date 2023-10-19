import { getType } from "./dataType.js";
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
