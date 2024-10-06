const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = parseInt(input);
let str = "";
for (let i = num; i > 0; i -= 4) {
  str += "long ";
}
console.log(str + "int");
