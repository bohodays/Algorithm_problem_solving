// 15665 N과 M (11)
// N개의 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 같은 수를 여러 번 골라도 되기 때문에 15664에서 visited만 고려하지 않으면 된다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = new Set();
const result = [];

const dfs = (count) => {
  if (count === m) {
    ans.add(result.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    result[count] = numbers[i];
    dfs(count + 1);
  }
}

dfs(0);
console.log([...ans].join('\n'));