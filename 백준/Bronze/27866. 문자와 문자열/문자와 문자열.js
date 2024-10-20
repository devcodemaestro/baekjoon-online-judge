const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const str = input[0];
const idx = input[1] - 1;

console.log(str[idx]);
