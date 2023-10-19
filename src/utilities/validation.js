import { VALID_EMAIL } from "../regex/email.js";

/**
 * @functiion
 * function to check the string email is valid or not
 * @param {string} email - the string email to be validating
 * @return {boolean}
 */
export function isValidEmail(email) {
  return VALID_EMAIL.test(email);
}
