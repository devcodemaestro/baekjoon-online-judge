const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let jaehwan = input[0].split("");
let doctor = input[1].split("");

jaehwan.length < doctor.length ? console.log("no") : console.log("go");
