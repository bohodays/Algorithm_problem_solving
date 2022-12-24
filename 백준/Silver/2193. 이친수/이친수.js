// 2193 이친수

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

// DP 테이블 초기화
const dp = Array(n + 1).fill(0);
dp[1] = 1;

if (n > 1) {
  for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }
}

console.log(String(dp[n]));