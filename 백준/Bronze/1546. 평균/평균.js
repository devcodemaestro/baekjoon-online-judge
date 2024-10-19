const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const maxNum = Math.max(...arr);
let result;
result = arr.map((i) => (i / maxNum) * 100).reduce((acc, cur) => acc + cur, 1);
console.log((result / num).toFixed(2));
