// 11053 가장 긴 증가하는 부분 수열
// 점화식을 알아내는 것이 중요하다...

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const N = inputData[0][0];
const A = inputData[1];
const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (A[i] > A[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));