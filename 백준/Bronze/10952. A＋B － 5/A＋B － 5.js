const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxNum = input.length - 1;
for (let i = 0; i < maxNum; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
