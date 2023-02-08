// 1182 부분수열의 합

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = inputData[0].split(' ').map((num) => +num);
const seq = inputData[1].split(' ').map((num) => +num);

let ans = 0;
const result = [];

const dfs = (count, idx) => {
  if (count === n + 1) {
    return;
  }

  if (count >= 1) {
    const sumValue = result.reduce((sum, num) => sum + num);
    if (sumValue === s) {
      ans += 1;
    }
  }

  for (let i = idx; i < n; i++) {
    result.push(seq[i]);
    dfs(count + 1, i + 1);
    result.pop();
  }
}

dfs(0, 0);
console.log(ans);