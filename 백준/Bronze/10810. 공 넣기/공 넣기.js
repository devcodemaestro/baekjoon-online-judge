const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const maxNum = input[0].split(" ")[0];
const arr = Array.from({ length: maxNum }, () => 0);

for (let start = 1; start < input.length; start++) {
  let [i, j, k] = input[start].split(" ").map(Number);
  i = i - 1;
  while (i < j) {
    arr[i] = k;
    i++;
  }
}
let result = arr.join(" ");
console.log(result);
