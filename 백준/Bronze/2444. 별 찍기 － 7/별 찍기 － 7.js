// 2444 별 찍기 - 7

const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let ans = [];

for (let i = n - 1; i >= 0; i--) {
  ans.push(" ".repeat(i) + "*".repeat(2 * (n - i) - 1));
}

const reverseAns = ans.slice(0).reverse().slice(1);
ans.push(...reverseAns);
console.log(ans.join("\n"));
