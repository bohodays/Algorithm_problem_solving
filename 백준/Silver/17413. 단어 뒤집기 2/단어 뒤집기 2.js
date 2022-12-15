// 17413 단어 뒤집기 2

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('');

let stack = [];
const ans = [];

if (inputData.includes('<')) {
  for (const str of inputData) {
    if (str === '>') {
      stack.push(str);
      ans.push(stack.join(''));
      stack = [];
    } else if (str === '<' && stack.length) {
      ans.push(stack.join('').split(' ').map((word) => word.split('').reverse().join('')).join(' '));
      stack = [];
      stack.push(str);
    } else {
      stack.push(str);
    }
  }
  ans.push(stack.join('').split(' ').map((word) => word.split('').reverse().join('')).join(' '));
  console.log(ans.join(''));
} else {
  console.log(inputData.join('').split(' ').map((word) => word.split('').reverse().join('')).join(' '));
}
