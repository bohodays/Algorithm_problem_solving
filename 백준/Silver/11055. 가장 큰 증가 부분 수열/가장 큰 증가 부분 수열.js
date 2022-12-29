// 11055 가장 큰 증가 부분 수열

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);                             // 수열의 크기
const seq = inputData[1].split(' ').map((num) => +num);     // 수열 배열
const dp = Array(n).fill(0);                               // dp 배열 초기화
dp[0] = seq[0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (seq[i] > seq[j]) {
      dp[i] = Math.max(dp[i], dp[j] + seq[i])
    } else {
      dp[i] = Math.max(dp[i], seq[i])
    }
  }
}

console.log(Math.max(...dp));