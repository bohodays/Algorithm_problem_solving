// 14500 테트로미노
// 문제를 깊게 이해하는 것부터 시작이다. 모두 4칸을 차지하고, 각 도형을 회전하고 대칭해보면
// 각 지점에서 4칸 기준으로 모든 경우를 탐색하는 것이다. DFS를 활용하자.
// 대신 'ㅜ' 모양은 2칸을 진행한 상태를 기준으로 다음 진행 좌표가 아닌 자기자신을 dfs로 수행해야한다. 아래의 풀이 참고 바랍.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const [N, M] = [inputData[0][0], inputData[0][1]];
const table = inputData.splice(1);

// 상 하 좌 우 방향탐색
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 방문 여부를 확인할 배열 초기화
const visited = Array(N).fill().map(() => Array(M).fill(false));

// 최대값 변수
let maxValue = 0;

// 'ㅜ'를 제외한 나머지 모양들의 최대값 계산하는 함수
const dfs = (i, j, sum, cnt) => {
  // 종료 조건
  if (cnt === 4) {
    maxValue = Math.max(maxValue, sum);
    return;
  }

  // 상하좌우 탐색
  for (let k = 0; k < 4; k++) {
    let nx = i + dx[k];
    let ny = j + dy[k];
    if (0 <= nx && nx < N && 0 <= ny && ny < M) {     // 유요한 범위 안에 속해있는지 확인
      if (!visited[nx][ny]) {                         // 방문 여부 확인

        if (cnt === 2) {                              // 풀이의 핵심이라고 생각한다. 2칸 진행된 상태에서 다음 dfs는 자기자신을 기준으로 진행해준다.
          visited[nx][ny] = true;
          dfs(i, j, sum + table[nx][ny], cnt + 1)     // sum과 cnt는 증가하지만 자기자신을 기준으로 진행했기 때문에 'ㅜ' 모양을 탐색할 수 있다.
          visited[nx][ny] = false;
        }

        visited[nx][ny] = true;                       // 방문 표시
        dfs(nx, ny, sum + table[nx][ny], cnt + 1);    // dfs 수행
        visited[nx][ny] = false;                      // 다른 좌표의 dfs를 위해 visited 배열 초기화 (중요!)
      }                            
    }
  }
}


for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = true;                              // 시작점 방문 표시
    dfs(i, j, table[i][j], 1);
    visited[i][j] = false;                             // 다음 좌표 확인을 위해 초기화
  }
}

console.log(maxValue);

