// 2004 조합 0의 개수

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

const getPowerNum = (num, power) => {
  let ans = 0;

  while (num >= power) {
    ans += parseInt(num / power);
    num /= power;
  }

  return ans;
}

const two = getPowerNum(n, 2) - getPowerNum(m, 2) - getPowerNum(n - m, 2);
const five = getPowerNum(n, 5) - getPowerNum(m, 5) - getPowerNum(n - m, 5);

console.log(Math.min(two, five));