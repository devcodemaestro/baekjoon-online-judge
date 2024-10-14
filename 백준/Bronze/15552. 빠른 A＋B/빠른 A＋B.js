const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = parseInt(input[0]);

let answer = "";
for (let i = 1; i <= A; i++) {
  const [B, C] = input[i].split(" ").map(Number);

  answer += B + C + "\n";
}
console.log(answer);
