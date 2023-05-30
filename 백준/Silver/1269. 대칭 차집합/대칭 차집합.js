// 1269 대칭 차집합

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

let setA = input[1].split(" ").map((num) => +num);
let setB = input[2].split(" ").map((num) => +num);

setA = new Set(setA);
setB = new Set(setB);

const ans = [];

// A - B
setA.forEach((item) => {
  if (!setB.has(item)) ans.push(item);
});

// B - A
setB.forEach((item) => {
  if (!setA.has(item)) ans.push(item);
});

console.log(ans.length);
