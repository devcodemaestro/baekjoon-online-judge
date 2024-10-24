const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const arr = Array.from({ length: input }, (v, i) => i + 1);
console.log(arr.join("\n"));