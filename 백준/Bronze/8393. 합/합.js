const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const maxNum = parseInt(input);
let count = 0;

for (let i = maxNum; i > 0; i--) {
  count += i;
}
console.log(count);
