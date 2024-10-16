const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxNum = 0;
let idx = 0;
for (let num of input) {
  if (num > maxNum) {
    maxNum = num;
    idx = input.indexOf(num);
  }
}
console.log(maxNum);
console.log(idx+1);
