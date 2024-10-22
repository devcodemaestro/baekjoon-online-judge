const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxNum = Number(input[0]);
let count;
let sum;
let result = "";
for (let i = 1; i < input.length; i++) {
  count = 0;
  sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
      sum = sum + count;
    } else {
      count = 0;
    }
  }
  result += sum + "\n";
}
result = result.slice(0, -1);
console.log(result);
