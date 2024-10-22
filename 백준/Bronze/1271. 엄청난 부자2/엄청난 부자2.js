let c = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let a = BigInt(c[0]);
let b = BigInt(c[1]);

console.log((a / b).toString());
console.log((a % b).toString());
