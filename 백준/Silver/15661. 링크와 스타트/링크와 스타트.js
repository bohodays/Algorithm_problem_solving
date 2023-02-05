// 15661 링크와 스타트

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const teamInfo = inputData.slice(1).map((nums) => nums.split(' ').map((num) => +num));
const visited = Array(n).fill(false);

let minValue = Infinity;
const dfs = (count, idx) => {
  if (count === n) return;

  if (count >= 2) {
    let team1TotalValue = 0;
    let team2TotalValue = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i] && visited[j]) team1TotalValue += teamInfo[i][j];
        else if (!visited[i] && !visited[j]) team2TotalValue += teamInfo[i][j];
      }
    }
    minValue = Math.min(minValue, Math.abs(team1TotalValue - team2TotalValue));
  }

  for (let i = idx; i < n; i++) {
    visited[i] = true;
    dfs(count + 1, i + 1);
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(minValue);