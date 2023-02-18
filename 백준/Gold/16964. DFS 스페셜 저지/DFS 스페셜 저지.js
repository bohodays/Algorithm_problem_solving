//  16964 DFS 스페셜 저지

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(inputData[0]);
const input = inputData.slice(1, N).map((nums) => nums.split(' ').map((num) => +num));
const target = inputData[N].split(' ').map((num) => +num);

const graph = Array(N + 1).fill().map(() => Array());
for (const node of input) {
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}

const visited = Array(N + 1).fill(false);

if (target[0] !== 1) {
  console.log(0);
} else {
  let ans = 0;
  const dfs = (targetArray) => {
    const node = targetArray.shift();

    if (targetArray.length === 0) {
      ans = 1;
      return;
    }

    visited[node] = true;
    for (const nextNode of graph[node]) {
      if (graph[node].includes(targetArray[0]) && !visited[[targetArray[0]]]) {
        dfs(targetArray);
      }
    }
  }

  dfs(target);
  console.log(ans);
}
