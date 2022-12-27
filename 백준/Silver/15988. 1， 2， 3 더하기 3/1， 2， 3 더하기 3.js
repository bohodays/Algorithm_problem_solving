// 15988 1, 2, 3 더하기 3
// 점화식 구하기
// dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num).splice(1);

const maxValue = Math.max(...inputData);
const dp = Array(maxValue + 1).fill(0);
dp[1] = 1, dp[2] = 2, dp[3] = 4;

if (maxValue > 3) {
  for (let i = 4; i <= maxValue; i++) {
    dp[i] = (dp[i - 3] % 1000000009) + (dp[i - 2] % 1000000009) + (dp[i - 1] % 1000000009);
  }
}

for (const num of inputData) {
  console.log((dp[num] % 1000000009));
}