const fs = require("fs");
const N = Number(fs.readFileSync("dev/stdin").toString().trim());

for (let i = 1; i <= 2 * N - 1; i++) {
  let spaceCount, starCount;

  if (i <= N) {
    // 윗부분
    spaceCount = N - i;
    starCount = 2 * i - 1;
  } else {
    // 아랫부분
    spaceCount = i - N;
    starCount = 2 * (2 * N - i) - 1;
  }
  let line = " ".repeat(spaceCount) + "*".repeat(starCount);
  console.log(line);
}