// 11726 2xn 타일링

const fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;

if (n < 3) console.log(dp[n]);
else {
  for (let i = 3; i < n + 1; i++) {
    // 점화식을 눈치챘어야 한다!
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
  }

  console.log(dp[n]);
}