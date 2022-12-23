// 11576 Base Conversion

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const [A, B] = inputData[0];
const m = inputData[1];
const numbers = inputData[2].reverse();

let decimal = 0;

// 주어진 수를 10진법으로 바꾸기
for (let i = 0; i < m; i++) {
  let num = numbers[i];
  decimal += num * (A**i);
}

if (decimal === 0) console.log(0);
else {
  let ans = [];

  // 10진법을 B진수로 바꾸기
  while (decimal > 0) {
    // 10진수를 2진수로 바꾸는 것처럼 진수 변환하기
    ans.push(decimal % B);
    // decimal을 B로 나눈 몫(소수점 아래를 제거한)을 다시 decimal에 할당한다.
    decimal = Math.floor(decimal / B);
  }

  console.log(ans.reverse().join(' '));
}
