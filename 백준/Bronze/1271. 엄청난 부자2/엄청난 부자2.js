const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split(" ");

let A = BigInt(input[0]);
let B = BigInt(input[1]);

console.log((A / B).toString());
console.log((A % B).toString());
