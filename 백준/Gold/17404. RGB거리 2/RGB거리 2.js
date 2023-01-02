// 17404 RGB거리 2

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const houses = inputData.slice(1).map((item) => item.split(' ').map((num) => +num));
// dp[0] = houses[0];

let ans = Infinity;
for (let i = 0; i < 3; i++) {
  const dp = Array(n).fill().map(() => Array(3).fill(Infinity));
  dp[0][i] = houses[0][i];
  for (let j = 1; j < n; j++) {
    dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + houses[j][0];
    dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + houses[j][1];
    dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + houses[j][2];
  }

  const testMinValue = Math.min(dp[n - 1][(i + 1) % 3], dp[n - 1][(i + 2) % 3]);
  if (testMinValue < ans) ans = testMinValue;
}

console.log(ans);