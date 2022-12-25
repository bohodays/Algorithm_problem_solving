// 1699 제곱수의 합
// 점화식... 어떻게 이런 생각을 할까...
// 12까지 써보고, 12에서 제곱수를 하나씩 빼보면서 점화식을 유추해보자.
// 11에서 1 더하면 12
// 8에서 4 더하면 12 
// ...

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array(n + 1).fill(0);
const squareArray = Array(316).fill().map((v,i) => (i + 1)**2);

for (let i = 1; i <= n; i++) {
  const tmpArray = [];
  for (const num of squareArray) {
    if (num > i) break;
    tmpArray.push(dp[i - num])
  }
  dp[i] = Math.min(...tmpArray) + 1;
}

console.log(dp[n]);