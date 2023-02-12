// 13023 ABCDE
// 친구관계가 5인지 확인해야 한다. 즉, dfs의 깊이가 5인지 확인하면 된다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const input = inputData.slice(1).map((nums) => nums.split(' ').map((num) => +num));

const graph = Array(n).fill().map(() => Array());
for (const item of input) {
  graph[item[0]].push(item[1]);
  graph[item[1]].push(item[0]);
}
const visited = Array(n).fill(false);

const dfs = (point, depth) => {
  if (depth === 4) {
    flag = true;
    return;
  }

  for (const index of graph[point]) {
    if (!visited[index]) {
      visited[index] = true;
      dfs(index, depth + 1);
      visited[index] = false;
    }
  }
}

let flag = false;
for (let i = 0; i < n; i++) {
  visited[i] = true;
  dfs(i, 0);
  visited[i] = false;
  if (flag) break;
}

if (flag) console.log(1);
else console.log(0);
