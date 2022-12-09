// 9613 GCD 합

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map(num => +num)).splice(1);



// 유클리드 호제법
const getGCD2 = (num1, num2) => (num2 > 0 ? getGCD2(num2, num1 % num2) : num1);


const ans = [];
for (const item of inputData) {
  let result = 0;
  for (let i = 1; i <= item[0] - 1; i++) {
    for (let j = i + 1; j <= item[0]; j++) {
      result += getGCD2(item[i], item[j]);
    }
  }
  ans.push(result)
}

console.log(ans.join('\n'));