const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);
const B = Number(input[1]);

console.log(A + B)
console.log(A - B)
console.log(A * B)
console.log(Math.floor(A / B))
console.log(A % B)
