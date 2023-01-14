// 15652 N과 M (4)
// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

let ans = '';
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
      ans += result.join(' ') + '\n';
    }
    return;
  }

  for (let i = 1; i <= n; i++) {
    result[count] = i;
    dfs(count + 1);
  }
}

dfs(0);
console.log(ans);
