// 4134 다음 소수

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item.trim());

const nums = input.slice(1);

// n보다 크거나 같은 소수를 찾아주는 함수
// 소수이면 true, 아니면 false
const isPrimeNumber = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const answer = [];

for (const item of nums) {
  if (item === 0 || item === 1) answer.push(2);
  else {
    let checkNum = item;
    while (true) {
      const isPrime = isPrimeNumber(checkNum);
      // 소수이면
      if (isPrime) {
        answer.push(checkNum);
        break;
      } else {
        checkNum++;
      }
    }
  }
}

console.log(answer.join("\n"));
