const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

if (num1 === num2) {
  if (num2 === num3) {
    console.log(num1 * 1000 + 10000);
  } else {
    console.log(num1 * 100 + 1000);
  }
} else if (num2 === num3) {
  if (num3 === num1) {
    console.log(num2 * 1000 + 10000);
  } else {
    console.log(num2 * 100 + 1000);
  }
} else if (num3 === num1) {
  if (num1 === num2) {
    console.log(num3 * 1000 + 10000);
  } else {
    console.log(num3 * 100 + 1000);
  }
} else {
  console.log(Math.max(num1, num2, num3) * 100);
}
