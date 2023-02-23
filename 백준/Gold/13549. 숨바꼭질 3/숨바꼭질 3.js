// 13549 숨바꼭질 3

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

const visited = Array(100001).fill(0);

const bfs = (currentPoint) => {
  const queue = [[currentPoint, 0]];

  while (queue.length) {
    [x, count] = queue.shift();

    if (x === K) {
      console.log(count);
      return;
    }

    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        const nextPoint = 2 * x;
        if (0 <= nextPoint && nextPoint <= 100000 && !visited[nextPoint]) {
          visited[nextPoint] = true;
          queue.push([nextPoint, count]);
        }
      } else if (i === 1) {
        const nextPoint = x - 1;
        if (0 <= nextPoint && nextPoint <= 100000 && !visited[nextPoint]) {
          visited[nextPoint] = true;
          queue.push([nextPoint, count + 1]);
        }
      } else {
        const nextPoint = x + 1;
        if (0 <= nextPoint && nextPoint <= 100000 && !visited[nextPoint]) {
          visited[nextPoint] = true;
          queue.push([nextPoint, count + 1]);
        }
      }
    }
  }
}

bfs(N, 0)