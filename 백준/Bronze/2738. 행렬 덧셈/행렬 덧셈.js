const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫째 줄에 행렬의 크기 N 과 M이 주어진다.
const [N, M] = input[0].split(" ");
const result = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

for (let i = 1; i < input.length; i++) {
  // 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다.
  let arr = input[i].split(" ").map(Number);
  // N개의 줄에 따라 합계를 계산할 인덱스를 분리
  if (i <= N) {
    for (let j = 0; j < M; j++) {
      result[i - 1][j] = arr[j];
    }
  } else {
    for (let j = 0; j < M; j++) {
      result[i - N - 1][j] += arr[j];
    }
  }
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}
