// 2146 다리 만들기

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(inputData[0]);
const graph = inputData.slice(1).map((nums) => nums.split(' ').map((num) => +num));

const visited = Array(N).fill().map(() => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 섬을 구분해주는 bfs
const bfs1 = (i, j, count) => {
  const queue = [[i, j]];
  visited[i][j] = true;
  graph[i][j] = count;

  while (queue.length) {
    [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        if (graph[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          graph[nx][ny] = count;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

const bfs2 = (count, ans) => {
  const distanceArray = Array(N).fill().map(() => Array(N).fill(-1));

  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === count) {
        queue.push([i, j]);
        distanceArray[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        if (graph[nx][ny] === 0 && distanceArray[nx][ny] === -1) {            // 바다를 만나면 거리를 1씩 늘린다.
          distanceArray[nx][ny] = distanceArray[x][y] + 1;
          queue.push([nx, ny]);
        } else if (graph[nx][ny] > 0 && graph[nx][ny] !== count) {            // 다른 땅을 만나면 기존 답과 비교하여 짧은 거리 선택
          ans = Math.min(ans, distanceArray[x][y]);
          return ans;
        }
      }
    }
  }
};

let count = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      bfs1(i, j, count);
      count += 1;
    }
  }
}

let ans = Infinity;
for (let i = 1; i < count; i++) {
  ans = bfs2(i, ans);
}

console.log(ans);