// 15651 N과 M (3)
// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((num) => +num);

let ans = '';
const result = [];

const dfs = (count) => {
  if (count === m) {
    ans += result.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= n; i++) {
    result[count] = i;
    dfs(count + 1);
  }
}

dfs(0);
console.log(ans);