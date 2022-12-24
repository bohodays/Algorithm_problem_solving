// 16194 카드 구매하기2 (11052 문제와 유사)

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const n = inputData[0][0];
const cards = [0, ...inputData[1]];

const dp = Array(n + 1).fill(10001);
dp[0] = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], cards[j] + dp[i - j]);
  }
}

console.log(dp[n]);