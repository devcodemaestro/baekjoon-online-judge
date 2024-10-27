const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let jaehwan = input[0].split("");
let doctor = input[1].split("");
let count = 0;

for (let i = 0; i < jaehwan.length; i++) {
  if (jaehwan[i] === "a") {
    count++;
  }
}
jaehwan = count;

count = 0;

for (let i = 0; i < doctor.length; i++) {
  if (doctor[i] === "a") {
    count++;
  }
}
doctor = count;

jaehwan < doctor ? console.log("no") : console.log("go");