// 13398 연속합 2

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);                                     // 수열의 크기
const seq = inputData[1].split(' ').map((num) => +num);             // 수열을 배열 형태로 저장
const dp = Array(n).fill(0);                                        // 수열에서 수를 제거하지 않고 구한 가장 큰 합 배열
const removedDP = Array(n).fill(0);                                 // 수열에서 수를 하나 제거하고 구한 가장 큰 합 배열
dp[0] = seq[0];
removedDP[0] = removedDP[0];

if (n > 1) {
  let ans = -1001;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + seq[i], seq[i]);                     //  수를 제거하지 않고 가장 큰 합 수열 구하기 (기존 방식)
  
    // 특정 원소를 제거하는 경우
    // 1) i번째 원소를 제거하는 경우: 위에서 구한 dp에서 i-1 번째 값 이용
    // 2) i번째 이전의 원소를 이미 제거하여 이전에 구해놓은 removedDP에 현재 i 값을 더해주는 경우: i번째 이전의 원소를 제거한 연속합인 removedDP[i - 1] + 현재 원소 i 값 이용
    // 위의 1, 2번 중 더 큰 값 저장하기
    removedDP[i] = Math.max(dp[i - 1], removedDP[i - 1] + seq[i]);
    
    ans = Math.max(ans, dp[i], removedDP[i])
  }
  console.log(ans);
} else {
  console.log(dp[0]);
}
