// 10819 차이를 최대로

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const inputArray = inputData[1].split(' ').map((num) => +num);

let ans = -Infinity;
const result = [];
const visited = Array(n).fill(false);

const checkArrayValue = (array) => {
  let computedValue = 0;
  for (let i = 0; i < array.length - 1; i++) {
    computedValue += Math.abs(array[i] - array[i + 1]);
  }
  return computedValue;
}

const dfs = (count) => {
  if (count === n) {
    const checkValue = checkArrayValue(result);
    if (checkValue > ans) {
      ans = checkValue;
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result[count] = inputArray[i];
      dfs(count + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(ans);