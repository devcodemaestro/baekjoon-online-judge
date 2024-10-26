const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  A > B ? console.log("Yes") : console.log("No");
}
