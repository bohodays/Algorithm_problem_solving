// 11866 요세푸스 문제 0

const fs = require("fs");
const [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

const nums = Array(n)
  .fill()
  .map((_, i) => i + 1);

const ans = [];
let cnt = 0;
let deleteInx = 0;

while (nums.length) {
  cnt++;

  if (cnt === k) {
    ans.push(...nums.splice(deleteInx, 1));
    cnt = 0;
  } else {
    deleteInx = (deleteInx + 1) % nums.length;
  }
}

console.log(`<${ans.join(", ")}>`);
