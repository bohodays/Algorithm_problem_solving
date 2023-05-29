// 1764 듣보잡

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const [n, m] = input[0].split(" ").map((num) => +num);
const noHearItems = input.slice(1, n + 1);
const noSeeItems = input.slice(n + 1);

let ans = [];

const noHearItemsObj = {};
noHearItems.forEach((item) => {
  noHearItemsObj[item] = true;
});

noSeeItems.forEach((item) => {
  if (noHearItemsObj[item]) ans.push(item);
});

ans = ans.sort();

console.log(ans.length);
console.log(ans.join("\n"));
