// 11722 가장 긴 감소하는 부분 수열

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const seq = inputData[1].split(' ').map((num) => +num);
const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (seq[i] < seq[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(Math.max(...dp));