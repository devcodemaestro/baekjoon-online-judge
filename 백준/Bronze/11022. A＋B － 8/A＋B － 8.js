const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]); // 5

for (let i = 1; i <= A; i++) {
  const [NUM1, NUM2] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${NUM1} + ${NUM2} = ${NUM1 + NUM2}`);
}
