const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v) ** 2)
  .reduce((acc, cur) => acc + cur, 0);

let result = 0;

result = input % 10;
console.log(result);