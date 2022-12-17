// 17298 오큰수

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const N = inputData[0][0];
const numbers = inputData[1];
const ans = Array(N).fill().map(() => -1);
const stack = [];

for (const [idx, item] of numbers.entries()) {
  while (stack.length && stack[stack.length - 1][1] < item) {
    const [tempIdx, tempNum] = stack.pop();
    ans[tempIdx] = item;
  }
  stack.push([idx, item]);
}

console.log(ans.join(' '));