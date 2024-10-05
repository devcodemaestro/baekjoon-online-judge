const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);

console.log(A - 543)
