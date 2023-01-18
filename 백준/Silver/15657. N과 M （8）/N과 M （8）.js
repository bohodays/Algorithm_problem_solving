// 15657 N과 M (8)
// N개의 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.
// 고른 수열은 비내림차순이어야 한다.
// 길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const numbers = inputData[1].split(' ').map((num) => +num).sort((a, b) => a - b);

let ans = '';                                         // 정답을 저장할 문자열 생성
const result = [];                                    // 수열을 저장할 배열 생성

// 수열이 비내림차순인지 확인하는 함수
const ascOrderCheck = (array) => {
  let flag = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      flag = false;
      break;
    }
  }
  return flag;
}

const dfs = (count) => {
  if (count === m) {                                  // count가 m과 같다면
    const check = ascOrderCheck(result);              // 비내림차순인지 확인
    if (check) {                                      // 비내림차순이라면  
      ans += result.join(' ') + '\n';                 // ans에 수열 추가
    }
    return;
  }

  for (let i = 0; i < n; i++) {                       // dfs 수행
    result[count] = numbers[i];
    dfs(count + 1);
  }
}

dfs(0);
console.log(ans);