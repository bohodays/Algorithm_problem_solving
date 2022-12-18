// 10808 알파벳 개수

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim()

const alphabetArray = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
const ans = Array(26).fill(0);

for (const str of inputData) {
  const idx = alphabetArray.indexOf(str);
  ans[idx] += 1;
}

console.log(ans.join(' '));