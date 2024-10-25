const fs = require("fs");

const [maxNum, list] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = list
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr[0] * arr[maxNum - 1]);
