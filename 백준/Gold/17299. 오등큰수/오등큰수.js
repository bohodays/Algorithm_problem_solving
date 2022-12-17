// 17299 오등큰수

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').splice(1);

const numbers = inputData[0].split(' ').map((num) => +num);
const numberCountingObj = {};
const ans = Array(numbers.length).fill().map(() => -1);
const stack = [];

for (const num of numbers) {
  numberCountingObj[num] ? numberCountingObj[num] += 1 : numberCountingObj[num] = 1
}

for (const [idx, item] of numbers.entries()) {
  while (stack.length && numberCountingObj[stack[stack.length - 1][1]] < numberCountingObj[item]) {
    const [tempIdx, tempNum] = stack.pop();
    ans[tempIdx] = item;
  }
  stack.push([idx, item])
}

console.log(ans.join(' '));