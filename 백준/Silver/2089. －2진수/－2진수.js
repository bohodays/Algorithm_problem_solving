// 2089 -2진수

const fs = require('fs');
let N = Number(fs.readFileSync('/dev/stdin').toString().trim());


if (N) {
  const ans = [];
  while (N / (-2) !== 0) {
    let remainder = N % (-2);
    if (remainder === -1 || remainder === 1) {
      N = Math.floor(N / (-2)) + 1;
      ans.push(1);
    } else {
      N = Math.floor(N / (-2));
      ans.push(0);
    }
  }
  console.log(ans.reverse().join(''));
} else {
  console.log(0);
}

