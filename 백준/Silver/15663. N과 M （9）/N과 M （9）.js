// 15663 N과 M (9)
// N개의 자연수 중에서 M개를 고른 수열

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = new Set();
const result = [];
const visited = Array(n).fill(false);

const dfs = (count) => {
  if (count === m) {
    ans.add(result.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result[count] = numbers[i];
      dfs(count + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log([...ans].join('\n'));