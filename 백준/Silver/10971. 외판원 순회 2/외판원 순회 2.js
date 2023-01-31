// 10971 외판원 순회 2

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const citiesCost = inputData.splice(1).map((nums) => nums.split(' ').map((num) => +num));
let minValue = Infinity;

const dfs = (start, end, sum, visited) => {
  if (visited.length === n) {
    if (citiesCost[end][start] !== 0) {
      minValue = Math.min(minValue, sum + citiesCost[end][start]);
    }
    return;
  }

  for (let j = 0; j < n; j++) {
    if (citiesCost[end][j] !== 0 && !visited.includes(j) && sum < minValue) {
      visited.push(j);
      dfs(start, j, sum + citiesCost[end][j], visited);
      visited.pop();
    }
  }
}

for (let i = 0; i < n; i++) {
  dfs(i, i, 0, [i]);
}

console.log(minValue);