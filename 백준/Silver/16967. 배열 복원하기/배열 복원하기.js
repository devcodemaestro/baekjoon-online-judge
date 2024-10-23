const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [H, W, X, Y] = input[0].split(" ").map(Number);
// Height: 3,
// Width: 3,
// X: 2,
// Y: 1

// B 배열 만들기
const B = [];

for (let i = 1; i < input.length; i++) {
  B.push(input[i].split(" ").map(Number));
}

// A 배열의 틀 만들기 
const A = Array.from({ length: H }, () => Array.from({ length: W }, () => 0));

// B 배열에서 A 배열 복원하기
for (let i = 0; i < H; i++) {
  // A배열의 크기는 H:3 W:3
  for (let j = 0; j < W; j++) {
    // (i, j)가 두 배열 모두에 포함되면, B[i][j] = A[i][j] + A[i-X][j-Y]이다.
    // 검산식 => B[i][j] - A[i-X][j-Y] = A[i][j]
    if (i >= X && j >= Y) {
      A[i][j] = B[i][j] - A[i - X][j - Y];
    } else {
      // (i, j)가 두 배열 중 하나에 포함되면, B[i][j] = A[i][j]
      A[i][j] = B[i][j];
    }
  }
}

// 문자열로 변환 후 출력
for (let i = 0; i < A.length; i++) {
  console.log(A[i].join(" "));
}