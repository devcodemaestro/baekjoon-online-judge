const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
if (input[0] === "") {
  console.log(0);
} else {
  let result = input.length;
  console.log(result);
}
