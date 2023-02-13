// 1707 이분 그래프
// 이분 그래프란, 모든 노드를 번갈아가면서 색을 칠했을 때 겹치지 않으면 이분 그래프다.
// 노드를 방문할 때마다 +1, -1 번갈아가면서 방문 체크한다. 현재 지점과 다음으로 방문하려는 지점의 sign이 같다면 이분 그래프가 아니다.
// 여러 테스트 케이스를 한번에 입력받는 경우, 값을 구분하는 것이 힘들었다. splice()와 shift()로 잘라서 사용하자.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dfs = (v, sign, visited, graph) => {
  visited[v] = sign;
  for (const nextNode of graph[v]) {
    if (visited[nextNode] === 0) {                               // 방문하지 않았다면
      const tmpCheck = dfs(nextNode, -sign, visited, graph);     // sign의 부호를 바꿔서 다음 노드의 dfs 수행
      if (!tmpCheck) {                                           // 다음 노드의 dfs가 false를 반환했다면 이분 그래프가 아니므로 false 리턴
        return false;
      }
    } else if (visited[nextNode] === visited[v]) {               // 방문한 노드이지만 같은 sign을 가지고 있다면 이분 그래프가 아니므로
      return false;                                              // false 리턴
    }
  }
  return true;                                                   // 이분 그래프라면 true 리턴
}

const K = Number(inputData.shift());

let ans = '';
for (let i = 0; i < K; i++) {
  const [V, E] = inputData.shift().split(' ').map((num) => +num);
  const edges = inputData.splice(0, E).map((nums) => nums.split(' ').map((num) => +num));
  const visited = Array(V + 1).fill(0);
  const graph = Array(V + 1).fill().map(() => Array());
  for (const nodes of edges) {
    graph[nodes[0]].push(nodes[1]);
    graph[nodes[1]].push(nodes[0]);
  }

  let result;
  for (let i = 1; i <= V; i++) {
    if (visited[i] === 0) {
      result = dfs(i, 1, visited, graph);
      if (!result) {
        break;
      }
    }
  }

  if (result) ans += 'YES' + '\n';
  else ans += 'NO' + '\n';
}

console.log(ans);
