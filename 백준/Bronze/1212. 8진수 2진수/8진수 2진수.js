// 1212 8진수 2진수

const fs = require('fs');
let oct = fs.readFileSync('/dev/stdin').toString().trim().split('');

let ans = [];

if (oct.length === 1 && oct[0] === '0') console.log(0);
else {
  for (const num of oct) {
    // parseInt를 이용해서 8진수로 바꾼다.
    // 8진수로 바꾼 수를 toString을 통해 2진수로 바꾼다.
    // 2진수로 바꾼 수의 길이가 3보다 작으면 앞에 0을 채워서 만들어준다. ((문자).padStart('채워야 될 길이', '채울 문자') 함수 이용)
    ans.push(parseInt(num, 8).toString(2).padStart(3, 0));
  }
}

ans = ans.join('');

// 맨 앞에 0이 있다면 제거하기
while (ans[0] === '0') {
  ans = ans.slice(1);
}
console.log(ans);
