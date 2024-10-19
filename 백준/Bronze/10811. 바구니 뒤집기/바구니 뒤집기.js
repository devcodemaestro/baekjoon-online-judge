const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [maxNum, M] = input[0].split(" ");
let arr = Array.from({ length: maxNum }, (v, i) => i + 1);
let subArr;
for (let start = 1; start <= M; start++) {
  subArr = [];
  let [i, j] = input[start].split(" ");
  i -= 1;
  subArr = arr.slice(i, j).reverse();
  arr.splice(i, subArr.length, ...subArr);
}

let result = arr.join(" ");
console.log(result);
