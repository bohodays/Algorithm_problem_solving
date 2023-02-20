// 1697 숨바꼭질

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

const wastedTime = Array(100001).fill(0);

const bfs = (N) => {
  const queue = [N];
  
  while (queue.length) {
    x = queue.shift();

    if (x === K) {
      return wastedTime[x];
    }
    for (const nx of [x - 1, x + 1, x * 2]) {
      if (0 <= nx && nx <= 100000) {
        if (wastedTime[nx] === 0) {
          wastedTime[nx] = wastedTime[x] + 1;
          queue.push(nx);
        }
      }
    }
  }
};

const ans = bfs(N);
console.log(ans);