const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const [A, B] = input;

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());
