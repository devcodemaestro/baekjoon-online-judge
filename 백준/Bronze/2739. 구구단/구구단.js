const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${a} * ${i} = ${a * i}`);
}
