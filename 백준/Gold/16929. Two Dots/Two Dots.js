// 16929 Two Dots

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = inputData[0].split(' ').map((num) => +num);
const graph = inputData.slice(1).map((strs) => strs.trim().split(''));
const visited = Array(N).fill().map(() => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let ans = false;
const dfs = (target, cnt, startPointX, startPointY, x, y) => {
  // 종료 조건
  if (ans === true) {
    return;
  }

  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];
    if (cnt >= 4 && nx === startPointX && ny === startPointY) {
      ans = true;
      return;
    }
    if (0 <= nx && nx < N && 0 <= ny && ny < M) {
      if (graph[nx][ny] === target && !visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(target, cnt + 1, startPointX, startPointY, nx, ny);
        visited[nx][ny] = false;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;
    dfs(graph[i][j], 1, i, j, i, j);
    visited[i][j] = false;
    if (ans === true) {
      ans = 'Yes';
      break;
    }
  }
  if (ans === 'Yes') {
    break;
  }
}

if (ans === 'Yes') console.log(ans);
else console.log('No');
