import { describe, test, expect } from "@jest/globals";
import modules from "../src/index.js";

const { Tuple } = modules;
describe("unit tests for Tuple class", function () {
  let tuple = new Tuple(1,2,2,3,3,3);
  
  test("getting values of tuple", function () {
    expect(tuple.values).toEqual([1,2,3]);
  });
  test("test reverse method", function () {
    expect(tuple.reverse()).toEqual([3,2,1]);
  });
  test("test reset method", function () {
    expect(tuple.reset()).toEqual([]);
  });
  test("test copy method", function () {
    expect(tuple.copy()).toEqual(tuple);
  });
});