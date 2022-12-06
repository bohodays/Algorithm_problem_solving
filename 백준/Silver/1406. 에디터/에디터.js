// 1406 에디터
// 배열이 비어있는 상태에서 pop() 해도 에러가 발생하지 않는다.
// 배열이 비어있는 상태에서 pop()하고 그것을 다시 push()해도 에러가 발생하지 않는다.
// 두 개의 배열을 만들어서 커서를 기준으로 왼쪽 단어들과 오른쪽 단어들로 나눈다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.replace(/\r/g, ''));

const stack1 = inputData[0].split('');
const stack2 = [];
const wordLength = Number(inputData[1]);

for (let i = 2; i < wordLength + 2; i++) {
  let [cmd, value] = inputData[i].split(' ')
  if (cmd === 'L' && stack1.length) stack2.push(stack1.pop());
  else if (cmd === 'D' && stack2.length) stack1.push(stack2.pop());
  else if (cmd === 'B') stack1.pop();
  else if (cmd === 'P') stack1.push(value);
}

let ans = stack1.join('');
ans += stack2.reverse().join('');
console.log(ans);