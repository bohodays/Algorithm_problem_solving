// 1261 알고스팟

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = inputData[0].split(' ').map((num) => +num);
const graph = inputData.slice(1).map((nums) => nums.trim().split('').map((num) => +num));

const distance = Array(N).fill().map(() => Array(M).fill(-1));

const bfs = () => {
  const queue = [[0, 0]];
  distance[0][0] = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (distance[nx][ny] === -1) {
          if (graph[nx][ny] === 0) {
            distance[nx][ny] = distance[x][y];
            queue.unshift([nx, ny]);
          } else {
            distance[nx][ny] = distance[x][y] + 1;
            queue.push([nx, ny])
          }
        }
      }
    }
  }
}

bfs();
console.log(distance[N - 1][M - 1]);