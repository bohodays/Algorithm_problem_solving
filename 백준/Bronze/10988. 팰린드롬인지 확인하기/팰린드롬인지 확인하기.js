// 10988 팰린드롬인지 확인하기

const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim();

let start = 0;
let end = word.length - 1;
let ans = 1;

while (start < end) {
  if (word[start] !== word[end]) {
    ans = 0;
    break;
  } else {
    start++;
    end--;
  }
}
console.log(ans);
