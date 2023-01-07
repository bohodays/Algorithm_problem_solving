// 1748 수 이어 쓰기 1

const fs = require('fs');
const inputData = Number(fs.readFileSync('/dev/stdin').toString().trim());

let ans = 0;
let n = inputData;
for (let i = 0; i < String(inputData).length; i++) {
  if (i === String(inputData).length - 1) {
    ans += n * (i + 1);
  } else {
    let nineCnt = '9' + '0'.repeat(i);
    ans += Number(nineCnt) * (i + 1);
    n -= Number(nineCnt);
  }
}

console.log(ans);
