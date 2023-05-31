// 11478 서로 다른 부분 문자열의 개수

const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim();

const ans = new Set();

for (let i = 0; i < word.length; i++) {
  for (let j = i; j < word.length; j++) {
    ans.add(word.slice(i, j + 1));
  }
}

console.log(ans.size);
