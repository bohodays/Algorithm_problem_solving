// 25206 너의 평점은

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim().split(" "));

const tableObj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let checkValue = 0;
let totalValue = 0;

input.forEach((item) => {
  if (item[2] !== "P") {
    checkValue += +item[1] * tableObj[item[2]];
    totalValue += +item[1];
  }
});

let ans = checkValue / totalValue;

console.log(ans.toFixed(6));
