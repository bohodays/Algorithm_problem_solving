// 2133 타일 채우기
// DP - 하... 점화식 알아내는 것이 너무 어렵다...

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(n + 1).fill(0);
dp[2] = 3;

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3 + 2;
  for (let j = 2; j < i - 2; j += 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[n]);