const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)