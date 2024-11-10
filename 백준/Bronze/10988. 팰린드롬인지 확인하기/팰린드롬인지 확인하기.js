const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

if (input.join() === input.reverse().join()) {
  console.log(1);
} else {
  console.log(0);
}
