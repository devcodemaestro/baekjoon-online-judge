const fs = require("fs");

const [A, B] = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

if (A >= 0 && B >= 0) {
  console.log(1);
} else if (A >= 0 && B <= 0) {
  console.log(4);
} else if (A <= 0 && B <= 0) {
  console.log(3);
} else {
  console.log(2);
}
