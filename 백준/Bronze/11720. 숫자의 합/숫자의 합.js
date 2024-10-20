const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const endIdx = input[0];
const arr = input[1].split("");
let sum = 0;
for (let i = 0; i < endIdx; i++) {
  sum += Number(arr[i]);
}
console.log(sum);
