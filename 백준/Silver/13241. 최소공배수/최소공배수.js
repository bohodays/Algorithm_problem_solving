// 13241 최소공배수

const fs = require("fs");
const [n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num)
  .sort((a, b) => a - b);

// 최대공약수 구하기
let gcd;
let [num1, num2] = [n, m];

while (num2 > 0) {
  let tmp = num2;
  num2 = num1 % num2;
  num1 = tmp;
}
// 최대 공약수
gcd = num1;

console.log((n * m) / gcd);
