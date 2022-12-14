// 2156 포도주 시식

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num);

const n = inputData[0];
const glass = [0, ...inputData.splice(1)];
const dp = Array(n + 1).fill(0);
dp[1] = glass[1], dp[2] = glass[1] + glass[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + glass[i - 1] + glass[i], dp[i - 2] + glass[i], dp[i - 1]);
}

console.log(dp[n]);