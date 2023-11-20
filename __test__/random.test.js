import { describe, test, expect } from "@jest/globals";
import { randomize, randomInteger, randomFloat, randomColor, randomHexaCode, randomString } from "../src/utilities/random.js";
import { getIntermediateType } from "../src/utilities/dataType.js";

describe("unit tests for random utilities", function () {
  const exampleArray = [1,2,3]
  
  test("test randomize function", function () {
    expect(exampleArray.includes(randomize(exampleArray))).toBe(true);
  });
  
  test("test randomInteger function", function () {
    expect(getIntermediateType(randomInteger(0, 10))).toBe("integer");
    expect(randomInteger(0, 1) === 0 || randomInteger(0, 1) === 1).toBe(true);
  });
  
  test("test randomFloat function", function () {
    expect(getIntermediateType(randomFloat(0, 9))).toBe("float");
  });
  
  test("test randomString function", function () {
    expect(randomString(12).length).toBe(12);
    expect(getIntermediateType(randomString(12))).toBe("string");
  });
  
  test("test randomHexaCode function", function () {
    expect(randomHexaCode(6).length).toBe(6);
  });
  
  test("generate random color", function () {
    expect(getIntermediateType(randomColor("rgb"))).toBe("string");
  });
  
  test("generate random RGB color", function () {
    expect(randomColor("rgb").search("rgb") > -1).toBe(true);
  });
  
});