// 1158 요세푸스 문제

const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

let stack1 = Array(N).fill().map((v,i) => i + 1).reverse();
let stack2 = [];
let ans = [];

let cnt = 0;
while (ans.length !== N) {
  while (stack1.length) {
    let item = stack1.pop();
    cnt++;
    if (cnt === K) {
      ans.push(item);
      cnt = 0;
    } else {
      stack2.push(item);
    }
  }
  stack1 = stack2.reverse();
  stack2 = [];
}

ans = `<${ans.join(', ')}>`
console.log(ans);