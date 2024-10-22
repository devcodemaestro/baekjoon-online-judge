const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let str = "";
for (let i = 0; i < input.length; i++) {
  const divisor = BigInt(input[i]);
  let target = BigInt(11);
  let length = 2;
  if (divisor === 1n) {
    str += "1\n";
  } else {
    while (target % divisor !== 0n) {
      target = target * 10n + 1n;
      length++;
    }
    str += length + "\n";
  }
}
str = str.slice(0, -1);
console.log(str);
