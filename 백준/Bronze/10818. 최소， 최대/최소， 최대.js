const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxLength = Number(input[0]);
const arr = input[1].split(" ");
let maxNum = -1000000;
let minNum = 1000000;

for (let i = 0; i < maxLength; i++) {
  if (Number(arr[i]) > maxNum) {
    maxNum = arr[i];
  }
  if (Number(arr[i]) < minNum) {
    minNum = arr[i];
  }
}
console.log(minNum, maxNum);