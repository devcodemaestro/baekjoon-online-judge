let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.abs(a - b));
