// 10773 제로

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num.trim());

const nums = input.slice(1);

const stack = [];

nums.forEach((num) => {
  if (num) stack.push(num);
  else stack.pop();
});

console.log(stack.length ? stack.reduce((sum, num) => sum + num) : 0);
