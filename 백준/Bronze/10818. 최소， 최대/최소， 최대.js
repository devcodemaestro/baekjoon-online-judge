const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxLength = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let str = "";
str = str + Math.min(...arr);
str = str + " " + Math.max(...arr);

console.log(str);