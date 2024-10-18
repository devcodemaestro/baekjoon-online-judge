const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
for (let i = 1; i <= 30; i++) {
  if (input.indexOf(String(i)) === -1) {
    result += String(i) + "\n";
  }
}
console.log(result);
