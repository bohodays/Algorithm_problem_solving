// 2720 세탁소 사장 동혁

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item.trim())
  .slice(1);

const ans = [];
input.forEach((item) => {
  let result = "";

  result += Math.floor(item / 25) + " ";
  item %= 25;

  result += Math.floor(item / 10) + " ";
  item %= 10;

  result += Math.floor(item / 5) + " ";
  item %= 5;

  result += Math.floor(item / 1) + "";
  item %= 1;

  ans.push(result);
});

console.log(ans.join("\n"));
