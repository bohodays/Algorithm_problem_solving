// 10844 쉬운 계단 수
/**
 * 풀이 전략
 *          0  1  2  3  4  5  6  7  8  9
자리수(1)   0  1  1  1  1  1  1  1  1  1
자리수(2)   1  1  2  2  2  2  2  2  2  1
자리수(3)   1  3  3  4  4  4  4  4  3  2
대각선의 위의 두 수 더하기
 */
const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 인덱스 0을 고려해서 0~9의 배열을 (n+1)개 가진 이중 배열 생성
const dp = Array(n + 1).fill().map(() => Array(10).fill(0));
// n = 1인 경우의 배열 생성
// [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
dp[1] = dp[1].map((v, i) => {
  if (i > 0) return 1;
  else return 0;
});

if (n > 1) {
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j + 1] % 1000000000;
      else if (j === 9) dp[i][j] = dp[i - 1][j - 1] % 1000000000;
      else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}

console.log(dp[n].reduce((sum, num) => sum + num) % 1000000000);