const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
let averageScore = 0;
let sumUnit = 0;

for (let i = 0; i < input.length; i++) {
  let [subjects, unit, rate] = input[i].split(" ");
  if (rate === "F") {
    rate = 0;
  } else if (rate === "P") {
    rate = 0;
    unit = 0;
  } else if (rate === "A+") {
    rate = 4.5;
  } else if (rate === "A0") {
    rate = 4;
  } else if (rate === "B+") {
    rate = 3.5;
  } else if (rate === "B0") {
    rate = 3;
  } else if (rate === "C+") {
    rate = 2.5;
  } else if (rate === "C0") {
    rate = 2;
  } else if (rate === "D+") {
    rate = 1.5;
  } else if (rate === "D0") {
    rate = 1;
  }
  sum += unit * rate;
  sumUnit += Number(unit);
}
averageScore = (sum / sumUnit).toFixed(6);
console.log(averageScore);