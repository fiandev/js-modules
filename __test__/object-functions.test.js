import { describe, test, expect } from "@jest/globals";
import modules from "../src/index.js";

const { getType, deleteObjectProperties, objectEntries, objectKeys, objectValues } = modules;

describe("unit tests for object functions function", function () {
  let obj = {
    username: "fiandev",
    name: "fian",
    age: 18,
  };
  
  test("test deleteObjectProperties", function (){
    expect(deleteObjectProperties(obj, "name")).not.toHaveProperty("name");
    expect(deleteObjectProperties(obj, ["name", "username"])).toHaveProperty("age");
  });
  test("test objectEntries", function (){
    expect(getType(objectEntries(obj))).toBe("array");
    expect(objectEntries(obj)).toEqual(Object.entries(obj));
  });
  test("test objectValues", function (){
    expect(getType(objectValues(obj))).toBe("array");
    expect(objectValues(obj)).toEqual(Object.values(obj));
  });
  test("test objectKeys", function (){
    expect(getType(objectKeys(obj))).toBe("array");
    expect(objectKeys(obj)).toEqual(Object.keys(obj));
  });
});