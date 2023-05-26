// 10811 바구니 뒤집기

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim())
  .map((nums) => nums.split(" ").map((num) => +num));

const [n, m] = input[0];
const cmd = input.slice(1);

const buckets = Array(n)
  .fill()
  .map((v, i) => i + 1);

for (const item of cmd) {
  let stack = [];
  for (let i = item[0] - 1; i <= item[1] - 1; i++) {
    stack.push(buckets[i]);
  }

  for (let i = item[0] - 1; i <= item[1] - 1; i++) {
    buckets[i] = stack.pop();
  }
}

console.log(buckets.join(" "));
