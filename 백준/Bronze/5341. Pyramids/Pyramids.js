const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num;
let result;
for (let i = 0; i < input.length - 1; i++) {
  result = 0;
  num = Number(input[i]);
  while (num !== 0) {
    result += num;
    num--;
  }
  console.log(result);
}
