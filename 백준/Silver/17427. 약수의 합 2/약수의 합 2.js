const fs = require("fs");

const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let result = 0;
for (let i = 1; i <= input; i++) {
    result += i * Math.floor(input / i);
  }
console.log(result);