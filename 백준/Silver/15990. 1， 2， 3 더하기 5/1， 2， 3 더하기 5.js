// 15990 1, 2, 3 더하기 5

const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n').splice(1).map((num) => +num);

const maxValue = Math.max(...numbers);
const dp = Array(maxValue + 1).fill().map(() => [0, 0, 0]);
// dp[i] = [1로 끝나는 개수, 2로 끝나는 개수, 3으로 끝나는 개수]
// ex) n = 3, dp[3] 은
// 2 + 1
// 1 + 2
// 3
// 그래서 [1, 1, 1]
dp[1] = [1, 0, 0];
dp[2] = [0, 1, 0];
dp[3] = [1, 1, 1];

for (let i = 4; i <= maxValue; i++) {
  // 6일 때 가정해서 생각해보자

  // 5에서 2와 3으로 끝나는 경우의 수에 1을 더하면 6이 된다. (5 + 1 = 6)
  dp[i][0] = dp[i - 1][1] % 1000000009 + dp[i - 1][2] % 1000000009;
  // 4에서 1와 3으로 끝나는 경우의 수에 2를 더하면 6이 된다. (4 + 2 = 6)
  dp[i][1] = dp[i - 2][0] % 1000000009 + dp[i - 2][2] % 1000000009;
  // 3에서 1와 2로 끝나는 경우의 수에 3을 더하면 6이 된다. (3 + 3 = 6)
  dp[i][2] = dp[i - 3][0] % 1000000009 + dp[i - 3][1] % 1000000009;
}

for (const num of numbers) {
  console.log((dp[num].reduce((sum, num) => sum + num)) % 1000000009);
}