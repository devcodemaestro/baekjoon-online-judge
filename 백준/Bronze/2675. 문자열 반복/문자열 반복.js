const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const endIdx = input[0];
let str;
for (let i = 1; i <= endIdx; i++) {
  str = "";
  let count;
  let [repeatNum, target] = input[i].split(" ");
  for (let j = 0; j < target.length; j++) {
    count = 0;
    while (Number(repeatNum) !== count) {
      str += target[j];
      count++;
    }
  }
  console.log(str.trim());
}
