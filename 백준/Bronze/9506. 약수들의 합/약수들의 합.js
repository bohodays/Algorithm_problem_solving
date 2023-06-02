// 9506 약수들의 합

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item.trim());

// 약수들을 구하고 합을 계산하는 함수
function checkPerFect(num) {
  const divisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  const sumValue = divisors.reduce((sum, num) => sum + num);

  if (sumValue === num) return divisors;
  else return false;
}

let ans = "";

input.forEach((item) => {
  if (item !== -1) {
    const result = checkPerFect(item);
    if (result) ans += item + " = " + result.join(" + ") + "\n";
    else ans += item + " is NOT perfect." + "\n";
  }
});

console.log(ans);
