const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxNum = Number(input[0]);
const targetArr = input[1].split(" ").map(Number);
const targetNum = Number(input[2]);
let count = 0;
for (let i = 0; i < maxNum; i++) {
  if (targetArr[i] === targetNum) {
    count++;
  }
}
console.log(count);
