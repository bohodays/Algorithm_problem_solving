// 2485 가로수

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item.trim());

const table = input.slice(1);
const tableSet = new Set(table);

const checkTable = [];
// 각 숫자들의 차 구하기
for (let i = 0; i < input[0] - 1; i++) {
  checkTable.push(table[i + 1] - table[i]);
}

// 최대 공약수 구하기
let GCD = 1;
const minValue = Math.min(...checkTable);

for (let i = 1; i <= minValue; i++) {
  let flag = true;
  for (let j = 0; j < checkTable.length; j++) {
    if (checkTable[j] % i !== 0) {
      flag = false;
      break;
    }
  }
  if (flag) GCD = i;
}

let ans = 0;

for (const item of checkTable) {
  ans += Math.floor(item / GCD) - 1;
}

console.log(ans);
