// 2501 약수 구하기

const fs = require("fs");
const [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

const result = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) result.push(i);
}

if (result[k - 1]) console.log(result[k - 1]);
else console.log(0);
