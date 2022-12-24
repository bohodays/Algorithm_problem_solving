// 11727 2xn 타일링 2

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

if (n > 2) {
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10007;
  }
}

console.log(dp[n]);