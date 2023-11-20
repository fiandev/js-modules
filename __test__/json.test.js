import { describe, test, expect } from "@jest/globals";
import modules from "../src/index.js";

const { json_encode, json_decode } = modules;

let obj = {
  name: "fiandev",
  hobbies: ["code", "cat", "music", "learn new things"],
}

describe("unit tests for json utilities", function () {
  let encoded = json_encode(obj);
  
  test("encoding object to json", function () {
    expect(typeof encoded).toBe("string");
  });
  
  test("decoding json to object", function () {
    expect(json_decode(encoded)).toEqual(obj);
  });
});