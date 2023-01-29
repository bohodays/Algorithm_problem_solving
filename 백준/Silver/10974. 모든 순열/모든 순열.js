// 10974 모든 순열

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let ans = '';
const result = [];
const visited = Array(n).fill(false);

const dfs = (count) => {
  if (count === n) {
    ans += result.join(' ') + '\n';
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result[count] = i;
      dfs(count + 1);
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(ans);
