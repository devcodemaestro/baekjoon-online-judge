const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxNum = Number(input[0]);
let count = 0;
for (let i = 1; i <= maxNum; i++) {
  if (input[i] % 2 === 1) {
    count++;
  }
}
console.log(count);
