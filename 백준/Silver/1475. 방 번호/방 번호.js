// 1475 방 번호

const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((num) => +num);

const ans = Array(10).fill(0);

for (const num of nums) {
  if (num === 6 || num === 9) {
    if (ans[6] <= ans[9]) ans[6] += 1;
    else ans[9] += 1;
  } else {
    ans[num] += 1;
  }
}

console.log(Math.max(...ans));
