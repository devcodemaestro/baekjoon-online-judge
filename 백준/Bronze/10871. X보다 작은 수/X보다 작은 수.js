const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [maxLength, targetNum] = input[0].split(" ");
const arr = input[1].split(" ");
let resultArr = [];
for (let i = 0; i < maxLength; i++) {
  if (Number(arr[i]) < Number(targetNum)) {
    resultArr.push(arr[i]);
  }
}

console.log(resultArr.join(" "));
