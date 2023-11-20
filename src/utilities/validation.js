import { VALID_EMAIL } from "../regex/email.js";
import { getType } from "./dataType.js";
import { typeErrorException, invalidValueException } from "./exceptions.js";

/**
 * @function isValidEmail
 * function to check string of email is valid or not
 * @param {string} email - string of email
 * @returns {boolean} result of testing string of email
 */
export function isValidEmail (email) {
  if (getType(email) !== "string") throw typeErrorException(email, "string");
  return VALID_EMAIL.test(email)
}

export function isValidPassword (password, rules = {}) {
  if (getType(password) !== "string") throw typeErrorException(password, "string");
  if (getType(rules) !== "object") throw typeErrorException(rules, "object");
  
  const { capitalize = true, firstLetterCapitalize = true, length = 7, uniqueCharacter = true} = rules;
  
  
}