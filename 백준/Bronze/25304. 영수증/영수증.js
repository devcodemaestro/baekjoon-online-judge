const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const totalCost = parseInt(input[0]);
const count = parseInt(input[1]) + 2;
let sum = 0;

for (let i = 2; i < count; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  sum += A * B;
}
if (sum === totalCost) {
  console.log("Yes");
} else {
  console.log("No");
}
