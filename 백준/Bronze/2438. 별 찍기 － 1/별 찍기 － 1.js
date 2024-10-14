const fs = require("fs");

const input = fs.readFileSync(0, 'utf-8').trim()

let A = Number(input);

let result = "";

for (let i = 1; i <= A; i++) {
  result += "*";
  console.log(result);
}
