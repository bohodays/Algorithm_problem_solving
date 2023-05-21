// 2903 중앙 이동 알고리즘

const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().trim());

let startNumber = 2;
let count = 0;
let addNumber = 1;

while (count !== n) {
  startNumber += addNumber;
  count++;
  addNumber *= 2;
}

console.log(startNumber ** 2);
