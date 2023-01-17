// 15656 N과 M (7)
// N개의 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans ='';                              // 정답을 저장할 문자열 생성
const result = [];                        // 수열을 저장할 배열 생성

const dfs = (count) => {
  if (count === m) {                      // count가 m과 같다면 ans에 배열 추가
    ans += result.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < n; i++) {           // dfs 수행
    result[count] = numbers[i];
    dfs(count + 1);
  }
}

dfs(0);
console.log(ans);