// 9454 스티커
// DP - 표를 그려서 점화식을 알아내야 한다.
// 인덱스 2부터 그 수를 선택할 수 있는 경우의 수 2가지를 고려해서 점화식을 구해야한다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const t = inputData.splice(0 , 1);
const testCases = inputData;
const ans = [];

for (let i = 0; i < testCases.length; i += 3) {
  const n = testCases[i][0];
  const testCase = [testCases[i + 1], testCases[i + 2]];
  const dp = Array(2).fill().map(() => Array(n).fill(0));
  dp[0][0] = testCase[0][0], dp[1][0] = testCase[1][0];
  dp[0][1] = dp[1][0] + testCase[0][1];
  dp[1][1] = dp[0][0] + testCase[1][1];

  for (let j = 2; j < n; j++) {
    dp[0][j] = Math.max(dp[1][j-2], dp[1][j-1]) + testCase[0][j];
    dp[1][j] = Math.max(dp[0][j-2], dp[0][j-1]) + testCase[1][j];
  }

  ans.push(Math.max(dp[0][n - 1], dp[1][n - 1]))

}


console.log(ans.join('\n'));