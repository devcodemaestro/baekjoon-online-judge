const fs = require("fs");
let [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(Math.abs(N - M));
