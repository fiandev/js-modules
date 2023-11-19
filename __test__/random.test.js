import modules from "../src/index.js";

const { randomColor, randomInteger, randomHexaCode } = modules;

console.log({
  a: randomInteger(0, 255),
  b: randomHexaCode(6),
  rgb: randomColor("rgb"),
  rgba: randomColor("rgba"),
  hex: randomColor("hex"),
})