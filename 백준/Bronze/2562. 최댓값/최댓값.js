const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxNum = Math.max(...input);
let idx = input.indexOf(maxNum);
console.log(maxNum);
console.log(idx + 1);
