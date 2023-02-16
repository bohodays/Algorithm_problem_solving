// 16947 서울 지하철 2호선

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(inputData[0]);
const input = inputData.slice(1).map((nums) => nums.split(' ').map((num) => +num));

const graph = Array(N + 1).fill().map(() => Array());
for (const node of input) {
  graph[node[0]].push(node[1]);
  graph[node[1]].push(node[0]);
}
for (const node of graph) {
  node.sort((a, b) => a - b);
}

// 해당 역이 순환역인지 확인하는 함수
const dfs = (startNode, v, cnt, visited, isCycle) => {
  // 종료 조건
  if (v === startNode && cnt >= 3) {
    isCycle[startNode] = true;
    return;
  }

  for (const nextNode of graph[v]) {
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      dfs(startNode, nextNode, cnt + 1, visited, isCycle);
    } else if (nextNode === startNode && cnt >= 3) {
      dfs(startNode, nextNode, cnt, visited, isCycle);
    }
  }
}

// 각 역에서 순환선 사이의 거리를 구하는 함수
const bfs = (getDistance, isCycle) => {
  const visited = Array(N + 1).fill(false);
  const queue = [];
  for (let i = 1; i < N; i++) {
    if (isCycle[i]) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    for (const nextNode of graph[node]) {
      if (!visited[nextNode]) {
        if (!isCycle[nextNode]) {
          getDistance[nextNode] = getDistance[node] + 1;
        }
        visited[nextNode] = true;
        queue.push(nextNode);
      }
    }
  }
}

const isCycle = Array(N + 1).fill(false);
const getDistance = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  const visited = Array(N + 1).fill(false);
  visited[i] = true;
  dfs(i, i, 1, visited, isCycle);
  visited[i] = false;
}

bfs(getDistance, isCycle);
console.log(getDistance.slice(1).join(' '));