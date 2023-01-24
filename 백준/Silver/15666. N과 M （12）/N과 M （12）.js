// 15666 N과 M (12)
// 개의 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
// 15665에서 비내림차순 조건만 추가된 문제다. 비내림차순을 확인해주는 함수만 추가해서 확인해주면 된다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = new Set();
const result = [];

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
    result[count] = numbers[i];
    dfs(count + 1);
  }
}

dfs(0);
console.log([...ans].join('\n'));