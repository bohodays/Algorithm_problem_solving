// 11005 진법 변환 2

const fs = require('fs');
const [N, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

let ans = parseInt(N, 10).toString(B).split('');

for (let i = 0; i < ans.length; i++) {
  if ('a' <= ans[i] && ans[i] <= 'z') {
    ans[i] = ans[i].toUpperCase();
  }
}
console.log(ans.join(''));