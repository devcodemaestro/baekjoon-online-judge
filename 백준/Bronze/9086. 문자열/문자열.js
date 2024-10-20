const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const endIdx = input[0];
for (let i = 1; i <= endIdx; i++) {
  let arr = input[i].split("");
  let startStr = arr[0];
  let endStr = arr[arr.length - 1];
  let result = startStr + endStr;
  console.log(result);
}
