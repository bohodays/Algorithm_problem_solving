// 10798 세로읽기

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const n = input.length;
let m = 0;

for (let i = 0; i < n; i++) {
  if (input[i].length > m) m = input[i].length;
}

for (let i = 0; i < n; i++) {
  if (input[i].length !== m) {
    input[i] += ".".repeat(m - input[i].length);
  }
}

let ans = "";

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[j][i] !== ".") {
      ans += input[j][i];
    }
  }
}

console.log(ans.trim());
