const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

let A = Number(input);
let count = A - 1;
let space;
let str = "*";

for (let i = 1; i <= A; i++) {
  count = A - i;
  space = "";
  while (count > 0) {
    space += " ";
    count--;
  }
  console.log(space + str);
  str += "*";
}