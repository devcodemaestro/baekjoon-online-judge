const fs = require("fs");

const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x % 42);

let arr = new Set(input);
console.log(arr.size);
