// 2745 진법 변환

const fs = require('fs');
let [B, N] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

B = B.split('')
for (let i = 0; i < B.length; i++) {
  if ('A' <= B[i] && B[i] <= 'Z') {
    B[i] = B[i].toLowerCase();
  }
}

let ans = parseInt(B.join(''), Number(N));

console.log(ans);