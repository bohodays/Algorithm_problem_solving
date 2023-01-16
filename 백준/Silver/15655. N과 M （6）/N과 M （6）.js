// 15655 N과 M (6)

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = '';
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
      ans += result.join(' ') + '\n';
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
console.log(ans);