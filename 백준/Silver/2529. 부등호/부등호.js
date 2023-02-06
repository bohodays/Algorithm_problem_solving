// 2529 부등호

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = Number(inputData[0]);
const [inequalitySigns] = inputData.slice(1).map((items) => items.split(' '));

const result = [];
const visited = Array(10).fill(false);
const ans = [];                                         // 조건에 해당하면 값을 저장할 배열

// 값들과 부등호가 일치하는지 확인하는 함수
const check = (x, y, inequalitySign) => {
  if (inequalitySign === '>') {
    if (x < y) return false;
  } else if (inequalitySign === '<') {
    if (x > y) return false;
  }
  return true;
}

const dfs = (count) => {
  if (count === k + 1) {                                                          // count가 k+1과 같다면
    let flag = true;                                                              // flag 초기화
    for (let i = 0; i < k + 1; i++) {                                             // 0 ~ k 까지 순회
      const checkSign = check(result[i], result[i + 1], inequalitySigns[i]);      // 위에서 만든 check() 함수로 두 개의 값과 부등호가 일치하는지 확인
      if (!checkSign) {                                                           // 두 개의 값과 부등호가 일치하지 않는다면
        flag = false;                                                             // flag를 false로 바꾸고 순회 정지
        break;
      }
    }
    if (flag) {                                                                   // flag가 여전히 true라면
      ans.push(result.join(''));                                                  // ans에 값 추가
    }
    return;                                                                       // dfs 종료
  }

  for (let i = 0; i < 10; i++) {                // 0 ~ 9 까지 순회하면서 dfs 수행
    if (!visited[i]) {
      visited[i] = true;
      result[count] = i;
      dfs(count + 1);
      visited[i] = false;
    }
  }
}

dfs(0);

console.log(ans[ans.length - 1]);
console.log(ans[0]);