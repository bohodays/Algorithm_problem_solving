// 11057 오르막 수
// 유형 : DP
// 점화식을 알아내야 함.
/**
 *      0 1 2 3 4 5 6 7 8 9
 * N=1  1 1 1 1 1 1 1 1 1 1
 *   2  1 2 3 4 5 6 7 8 9 10
 *   3  1 3 6 10 15 21 28 36 45 55
 */

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

// dp 테이블 초기화
const dp = Array(n + 1).fill().map(() => Array(10).fill(1));

if (n >= 2) {
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = (dp[i][j - 1] % 10007) + (dp[i - 1][j] % 10007);
    }
  }
}

console.log((dp[n].reduce((sum, num) => sum + num) % 10007));