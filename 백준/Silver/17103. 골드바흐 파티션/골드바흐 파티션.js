// 17103 골드바흐 파티션

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num);
const numbers = inputData.splice(1);

// 0 ~ 1000000 까지 소수 배열 생성
const primeCheckArray = Array(1000001).fill().map(() => true);
for (let i = 2; i < Math.sqrt(1000000) + 1; i++) {
  if (primeCheckArray[i] === true) {
    let j = 2;
    while (i * j <= 1000000) {
      primeCheckArray[i * j] = false;
      j++;
    }
  }
}

// 주어진 수를 2로 나눈 값의 양 옆을 확인하여 모두 소수이면 그 값들을 출력한다.
// 소수가 아니면 1씩 증가 및 감소 시키며 모두 소수인 값들을 찾는다.
let ans = '';
for (const number of numbers) {
  let result = 0;
  const halfNumber = number / 2
  for (let i = halfNumber; i > 1; i--) {
    if (primeCheckArray[i] && primeCheckArray[number - i]) {
      result += 1
    }
  }
  ans += result + '\n';
}

console.log(ans);