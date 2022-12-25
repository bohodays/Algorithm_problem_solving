// 2225 합분해

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

const dp = Array(K + 1).fill().map(() => Array(N + 1).fill(0));
for (let i = 0; i <= K; i++) {
  dp[i][1] = i;
}
dp[1] = dp[1].fill(1);

for (let i = 2; i <= K; i++) {
  for (let j = 2; j <= N; j++) {
    dp[i][j] = (dp[i][j - 1] % 1000000000) + (dp[i - 1][j] % 1000000000);
  }
}

console.log(dp[K][N] % 1000000000);