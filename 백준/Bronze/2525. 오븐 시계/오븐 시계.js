const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let time = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
let cookTime = Number(input[1]);

let totalMinute = time * 60 + minute + cookTime;
let resultTime = Math.floor(totalMinute / 60);
let resultMinute = totalMinute % 60;

if (resultTime >= 24) {
  resultTime -= 24;
}
console.log(`${resultTime} ${resultMinute}`);
