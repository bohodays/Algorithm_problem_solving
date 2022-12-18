// 11656 접미사 배열

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('').reverse();

const stack = [inputData.reverse().join('')];
inputData.reverse();

while (inputData.length !== 1) {
  inputData.pop();
  stack.push(inputData.reverse().join(''))
  inputData.reverse();
}

stack.sort()
const ans = stack.join('\n')
console.log(ans);