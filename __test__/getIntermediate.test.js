import { describe, test, expect } from "@jest/globals";
import modules from "../src/index.js";

const { getIntermediateType } = modules;

describe("unit tests for getIntermediateType function", function () {
  test("check number[] type", function () {
    expect(getIntermediateType([1, 2, 3])).toBe("number[]");
  });
  test("check string[] type", function () {
    expect(getIntermediateType(["a", "b", "c"])).toBe("string[]");
  });
  test("check boolean[] type", function () {
    expect(getIntermediateType([true, false, true])).toBe("boolean[]");
  });
});