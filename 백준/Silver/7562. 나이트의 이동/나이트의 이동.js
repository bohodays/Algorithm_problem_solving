// 7562 나이트의 이동

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(inputData.splice(0, 1));

let ans = '';
for (let i = 0; i < T; i++) {
  const N = Number(inputData.splice(0, 1));
  const [currentPoint] = inputData.splice(0, 1).map((nums) => nums.split(' ').map((num) => +num));
  const [targetPoint] = inputData.splice(0, 1).map((nums) => nums.split(' ').map((num) => +num));
  const graph = Array(N).fill().map(() => Array(N).fill(0));

  const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

  graph[currentPoint[0]][currentPoint[1]] = 1;
  bfs = (x, y) => {
    const queue = [[x, y]];

    while (queue.length) {
      [x, y] = queue.shift();
      
      for (let k = 0; k < 8; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (0 <= nx && nx < N && 0 <= ny && ny < N) {
          if (graph[nx][ny] === 0) {
            graph[nx][ny] = graph[x][y] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  bfs(currentPoint[0], currentPoint[1]);
  ans += (graph[targetPoint[0]][targetPoint[1]] - 1) + '\n';
}

console.log(ans);