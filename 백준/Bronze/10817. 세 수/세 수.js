// 10817 세 수

const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

nums.sort((a, b) => b - a);

console.log(nums[1]);
