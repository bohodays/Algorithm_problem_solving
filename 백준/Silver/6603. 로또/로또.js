// 6603 로또

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((nums) => nums.split(' ').map((num) => +num));


for (const item of inputData) {
  if (item[0] === 0) break;
  
  const k = item[0];
  const s = item.splice(1);
  const visited = Array(k).fill(false);
  
  let ans = '';
  const result = [];

  const ascOrderCheck = (array) => {
    let flag = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  const dfs = (count) => {
    if (count === 6) {
      const check = ascOrderCheck(result);
      if (check) {
        ans += result.join(' ') + '\n';
      }
      return;
    }
  
    for (let i = 0; i < k; i++) {
      if (!visited[i]) {
        visited[i] = true;
        result[count] = s[i];
        dfs(count + 1);
        visited[i] = false;
      }
    }
  }
  
  dfs(0);
  console.log(ans);
}