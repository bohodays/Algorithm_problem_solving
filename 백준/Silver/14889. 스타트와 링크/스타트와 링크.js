// 14889 스타트와 링크

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const teamInfo = inputData.slice(1).map((nums) => nums.split(' ').map((num) => +num));
const visited = Array(n).fill(false);

let minValue = Infinity;
const dfs = (count, idx) => {
  if (count === n / 2) {
    let [team1Value, team2Value] = [0, 0];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (visited[i] && visited[j]) team1Value += teamInfo[i][j];
        else if (!visited[i] && !visited[j]) team2Value += teamInfo[i][j];
      }
    }
    minValue = Math.min(minValue, Math.abs(team1Value - team2Value));
    return;
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(count + 1, i + 1);
      visited[i] = false;
    }
  }
}

dfs(0, 0);
console.log(minValue);