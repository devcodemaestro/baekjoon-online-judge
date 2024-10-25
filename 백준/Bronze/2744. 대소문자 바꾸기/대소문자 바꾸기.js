const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("");

let str = "";
for (let i of input) {
  if (i === i.toUpperCase()) {
    str += i.toLowerCase();
  } else {
    str += i.toUpperCase();
  }
}
console.log(str);
