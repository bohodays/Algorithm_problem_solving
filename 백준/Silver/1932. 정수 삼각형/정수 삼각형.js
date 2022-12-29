// 1932 정수 삼각형
// DP

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

// 입력받은 데이터 정리
const n = inputData[0][0];
const triangleNum = [[], ...inputData.splice(1)];   // 인덱스를 맞추기 위해 맨 앞에 빈배열 추가
// dp 테이블 초기화
const dp = Array(n + 1).fill().map((v, i) => Array(i).fill(0));
dp[1][0] = triangleNum[1][0];

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j] + triangleNum[i][j];
    else if (j === i - 1) dp[i][j] = dp[i - 1][j - 1] + triangleNum[i][j];
    else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangleNum[i][j];
  }
}

console.log(Math.max(...dp[n]));