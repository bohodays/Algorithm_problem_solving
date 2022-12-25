// 1912 연속합

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const n = inputData[0][0];
const seq = inputData[1];
const dp = [seq[0]];

for (let i = 1; i < n; i++) {
  dp.push(Math.max(seq[i], dp[i - 1] + seq[i]))
}

console.log(Math.max(...dp));