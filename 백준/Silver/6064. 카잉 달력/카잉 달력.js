// 6064 카잉 달력
// 브루트 포스

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));

const t = inputData[0][0];    // 테스트 케이스 개수
const testCases = inputData.splice(1);

const solution = (M, N, x, y) => {
  while (x <= M * N) {
    if ((x - y) % N === 0) return x;
    x += M;
  }
  return -1;
}

let ans = ''
for (const item of testCases) {
  ans += solution(item[0], item[1], item[2], item[3]) + '\n'
}
console.log(ans);
