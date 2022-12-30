// 11054 가장 긴 바이토닉 부분 수열
/** 풀이 전략
 * 주어진 수열에서 증가하는 수열의 길이를 구한다.
 * 주어진 수열을 reverse하여 감소하는 수열의 길이를 구한다. 주어진 수열을 reverse하여 증가하는 수열의 길이 === 주어진 수열의 감소하는 길이
 * 위의 과정을 거치고 reverse한 수열을 다시 되돌려주면 감소하는 수열의 길이를 구할 수 있다.
 */

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);                               // 수열의 크기
const seq = inputData[1].split(' ').map((num) => +num);       // 증가하는 수열을 찾기 위한 배열
const seqReverse = seq.slice(0).reverse();                    // 감소하는 수열을 찾기 위한 배열 (깊은 복사를 할 땐 slice()를 이용하자!)
const increaseDP = Array(n).fill(1);
let decreaseDP = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (seq[i] > seq[j]) increaseDP[i] = Math.max(increaseDP[i], increaseDP[j] + 1);                    // 증가하는 수열의 길이 구하기
    if (seqReverse[i] > seqReverse[j]) decreaseDP[i] = Math.max(decreaseDP[i], decreaseDP[j] + 1);      // 감소하는 수열의 길이 구하기
  }
}

decreaseDP = decreaseDP.slice(0).reverse();         // 증가하는 수열의 길이를 다시 reverse하여 감소하는 수열의 길이를 구한다.

const ans = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  ans[i] = increaseDP[i] + decreaseDP[i] - 1;       // 두번씩 겹치는 부분이 생기기 때문에 1을 빼주어야 한다.
}

console.log(Math.max(...ans));


