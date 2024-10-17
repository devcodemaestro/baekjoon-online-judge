const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = Array.from({ length: N }, (v, i) => i + 1);

let prev = 0;
let result = ""

for (let q = 1; q <= M; q++) {
  let [i, j] = input[q].split(" ").map(Number);
  i -= 1;
  j -= 1;
  prev = arr[i];
  arr[i] = arr[j];
  arr[j] = prev;
}
result = arr.join(" ");
console.log(result);
