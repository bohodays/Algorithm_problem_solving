// 1292 쉽게 푸는 문제

const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const numsArray = [];

let count = 1;
let breakPoint = 0;

while (true) {
  if (breakPoint === b) break;

  for (let i = 1; i <= count; i++) {
    numsArray.push(count);
  }

  breakPoint++;
  count++;
}

console.log(numsArray.splice(a - 1, b - a + 1).reduce((sum, num) => sum + num));
