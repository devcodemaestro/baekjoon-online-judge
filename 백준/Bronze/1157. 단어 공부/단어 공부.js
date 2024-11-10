const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

let obj = {};
let result = 0;
let flag = false;
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (obj[input[i].charCodeAt()] === undefined) {
    obj[input[i].charCodeAt()] = "1";
  } else {
    obj[input[i].charCodeAt()]++;
  }
}

for (key in obj) {
  if (Number(obj[key]) > count) {
    result = key;
    count = Number(obj[key]);
    flag = false;
  } else if (Number(obj[key]) === count) {
    flag = true;
  }
}
if (flag) {
  console.log("?");
} else {
  console.log(String.fromCharCode(result));
}
