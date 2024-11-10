const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0];

let count = 0;

for (let i = 1; i < input.length; i++) {
  let arr = input[i].split("");
  let flag = true;
  let obj = {};
  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]] === undefined) {
      if (arr[j] !== arr[j + 1]) {
        obj[arr[j]] = 1;
      }
    } else if (arr[j - 1] === arr[j]) {
      obj[arr[j]]++;
    } else if (arr[j - 1] !== arr[j] && obj[arr[j]] !== undefined) {
      flag = false;
    }
  }

  if (flag) {
    count++;
  }
}

console.log(count);
