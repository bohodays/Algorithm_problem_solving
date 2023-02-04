// 14501 퇴사

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const table = inputData.splice(1).map((nums) => nums.split(' ').map((num) => +num));
const dp = Array(n + 1).fill(0);

for (let i = n - 1; i > -1; i--) {
  if (table[i][0] + i > n) dp[i] = dp[i + 1];
  else dp[i] = Math.max(dp[i + 1], table[i][1] + dp[i + table[i][0]])
}

console.log(dp[0]);