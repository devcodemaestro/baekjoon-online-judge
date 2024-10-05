const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let hour = parseInt(input[0]);
let minute = Number(input[1]);
let num = 45;

if (minute >= num) {
  minute -= num;
  console.log(hour, minute);
} else if (hour >= 1) {
  hour -= 1;
  minute = minute - num + 60;
  console.log(hour, minute);
} else if (hour === 0) {
  hour = 23;
  minute = minute - num + 60;
  console.log(hour, minute);
}