const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]);
const B = input[1].toString().trim().split("");
const C = parseInt(input[1]);

for (let i = B.length - 1; i >= 0; i--) {
  console.log(A * Number(B[i]));
}
console.log(A * C);
