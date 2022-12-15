// 10799 쇠막대기

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('');

let ans = 0;
const stack = [];

for (const [idx, item] of inputData.entries()) {
  if (item === ')') {
    if (inputData[idx - 1] === '(') {
      stack.pop();
      ans += stack.length;
    } else {
      stack.pop();
      ans += 1;
    }
  } else {
    stack.push(item)
  }
}

console.log(ans);