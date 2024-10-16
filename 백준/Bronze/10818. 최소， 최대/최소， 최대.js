const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxLength = Number(input[0]);
const arr = input[1].split(" ").sort((a, b) => a - b);

console.log(arr[0], arr[maxLength - 1]);
