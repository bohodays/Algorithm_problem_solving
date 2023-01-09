// 15650 N과 M (2)

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

const visited = Array(n + 1).fill(false);

let ans = '';
const result = [];
const dfs = (count) => {
  if (count === m) {
    let checkAscOder = ascOderCheck(result);
    if (checkAscOder) {
      ans += result.join(' ') + '\n'
    }
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {                // 해당 자연수 방문 여부 확인
      visited[i] = true;              // 방문하지 않았다면 방문으로 변경
      result[count] = i;              // result 배열에 값 추가
      dfs(count + 1);                 // dfs 수행
      visited[i] = false;             // 다음 dfs를 위해 방문했던 곳을 미방문 처리로 바꿔주는 것이 중요하다.
    }
  }
}

const ascOderCheck = (array) => {
  let flag = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      flag = false;
      break;
    }
  }
  return flag;
}

dfs(0);
console.log(ans);

