// 11655 ROT13

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();

const upper = Array(26).fill().map((v, i) => String.fromCharCode(i + 65));
const lower = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));

let ans = '';
for (const str of inputData) {
  if (upper.includes(str)) ans += upper[(upper.indexOf(str) + 13) % 26];
  else if (lower.includes(str)) ans += lower[(lower.indexOf(str) + 13) % 26];
  else ans += str
}

console.log(ans);