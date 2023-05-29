// 1620 나는야 포켓몬 마스터 이다솜

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const [n, m] = input[0].split(" ").map((num) => +num);

const encyclopedia = input.slice(1, n + 1);
const checkItems = input.slice(n + 1);

const pocketmonObj = {};
const reversePocketmonObj = {};

encyclopedia.forEach((item, index) => {
  pocketmonObj[item] = index + 1;
  reversePocketmonObj[index + 1] = item;
});

let ans = "";

checkItems.forEach((item) => {
  if (pocketmonObj[item]) ans += pocketmonObj[item] + "\n";
  else ans += reversePocketmonObj[item] + "\n";
});

console.log(ans);
