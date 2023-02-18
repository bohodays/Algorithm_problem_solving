// 16940 BFS 스페셜 저지

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(inputData[0]);
const input = inputData.slice(1, N).map((nums) => nums.split(' ').map((num) => +num));
const target = inputData[inputData.length - 1].split(' ').map((num) => +num);                 // 비교할 탐색 루트

const graph = Array(N + 1).fill().map(() => Array());
for (const node of input) {
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}

const children = Array(N + 1).fill().map(() => Array());
const visited = Array(N + 1).fill(false);

const bfs = () => {
  const queue = [1];
  visited[1] = true;

  while (queue.length) {
    const v = queue.shift();
    for (const nextNode of graph[v]){
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push(nextNode);
        children[v].push(nextNode);
      }
    }
  }
}

bfs();

let ans = 1;
let flag = false;
let nextIndex = 1;
for (const node of target) {
  if (nextIndex === N) {
    break;
  }

  const childrenArrayLength = children[node].length;
  const c1 = target.slice(nextIndex, nextIndex + childrenArrayLength)
  const c2 = children[node];
  for (const checkNode of c1) {
    if (!c2.includes(checkNode)) {
      ans = 0;
      break;
    }
  }
  
  if (flag) break;

  nextIndex += childrenArrayLength;
}

console.log(ans);


