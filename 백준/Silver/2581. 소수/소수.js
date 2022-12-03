// 2581 소수

const fs = require('fs');
const [M, N] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num);

const primeArray = [];  // 소수들의 배열

for (let i = M; i <= N; i++) {
  if (i == 1) continue;
  else if (i == 2) primeArray.push(2);
  else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
      if (j === i - 1) primeArray.push(i);
    }
  }
}


if (primeArray.length === 0) console.log(-1);
else {
  const sumValue = primeArray.reduce((sum, num) => sum + num);       // 소수의 합
  const minValue = Math.min(...primeArray)                           // 최솟값
  console.log(sumValue);
  console.log(minValue);
}