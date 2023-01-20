// 15664 N과 M (10)
// N개의 자연수 중에서 M개를 고른 수열
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = new Set();
const result = [];
const visited = Array(n).fill(false);

const ascOrderCheck = (array) => {
  let flag = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      flag = false;
      break;
    }
  }
  return flag;
}

const dfs = (count) => {
  if (count === m) {
    const check = ascOrderCheck(result);
    if (check) {
      ans.add(result.join(' '));
    }
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