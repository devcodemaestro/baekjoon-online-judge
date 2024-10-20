const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let str;
let A;
let B;

for (let i = 0; i < 2; i++) {
  str = input[i].split("").reverse();
  if (i === 0) {
    A = Number(str.join(""));
  } else {
    B = Number(str.join(""));
  }
}
console.log(Math.max(A, B));
