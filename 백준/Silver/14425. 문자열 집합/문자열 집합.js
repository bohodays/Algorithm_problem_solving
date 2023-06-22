// 14425 문자열 집합

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const [n, m] = input[0].split(" ").map((num) => +num);

const wordsSet = new Set(input.slice(1, n + 1));

const checkWords = input.slice(n + 1);

let ans = 0;
checkWords.forEach((item) => {
  if (wordsSet.has(item)) ans++;
});

console.log(ans);
