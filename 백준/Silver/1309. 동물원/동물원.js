// 1309 동물원

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(n + 1).fill(0);
dp[0] = 1, dp[1] = 3;

if (n >= 2) {
  for (let i = 2; i <= n; i++) {
    dp[i] = ((dp[i - 1] * 2) + dp[i - 2]) % 9901;
  }
}

console.log(dp[n] % 9901);