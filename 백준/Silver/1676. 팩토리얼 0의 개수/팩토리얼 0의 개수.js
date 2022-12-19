// 1676 팩토리얼 0의 개수

const fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let ans = 0;

while (N >= 5) {
  ans += parseInt(N / 5);
  N /= 5
}

console.log(ans);