const fs = require("fs");
const maxNum = Number(fs.readFileSync("/dev/stdin").toString().trim());
let str = "";
for (let i = 1; i <= maxNum; i++) {
  if (i !== maxNum) {
    str += i + "\n";
  } else {
    str += i;
  }
}

console.log(str);
