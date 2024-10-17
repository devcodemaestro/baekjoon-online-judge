const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]);
const arr =[]
for (let i = 1; i <= A; i++) {
  const [B, C] = input[i].split(" ").map(Number);
    arr.push(B+C)
}
console.log(arr.join("\n"))