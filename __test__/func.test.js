import { describe, test, expect } from "@jest/globals";
import modules from "../dist/module/index.js";

const { getType, isFloat, isInteger, isArray } = modules;

describe("unit tests for isFloat function", function () {
  test("check 1.1 with isFloat function", function () {
    expect(isFloat(1.1)).toBe(true);
  });
  
  test("check null data type with function getType", function () {
    expect(getType(null)).toBe("null");
  });
  
  test("check 1 with isFloat function", function () {
    expect(isFloat(1)).toBe(false);
  });
});

describe("unit tests for isInteger function", function () {
  test("check 1 with isInteger function", function () {
    expect(isInteger(1)).toBe(true);
  });
  
  test("check 1 with isInteger function", function () {
    expect(isInteger("1")).toBe(false);
  });
});

describe("unit tests for isArray function", function () {
  test("test with parameter [1,2,3]", function () {
    expect(isArray([1,2,3])).toBe(true);
  });
  test("test with parameter 'hello'", function () {
    expect(isArray("hello")).toBe(false);
  });
});