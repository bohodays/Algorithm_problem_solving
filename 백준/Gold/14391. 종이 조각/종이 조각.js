// 14391 종이 조각
// 이해가 되지 않는다......

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = inputData[0].split(' ').map((num) => +num);
const graph = inputData.slice(1).map((nums) => nums.trim().split('').map((num) => +num));

let ans = 0
let sub;
const dfs = (arr) => {
  sub = 0;
  if (arr.length === n*m) {

    const narr = [];
    for (let i = 0; i < n; i++) {
      narr.push(arr.slice(i * m, i * m + m))
    }

    // 가로
    for (let i = 0; i < n; i++) {
      let aa = 0;
      for (let j = 0; j < m; j++) {
        if (narr[i][j] === 0) {
          aa = aa * 10 + graph[i][j];
        } else {
          sub += aa;
          aa = 0;
        }
      }
      sub += aa;
      aa = 0;
    }

    // 세로
    for (let j = 0; j < m; j++) {
      let bb = 0;
      for (let i = 0; i < n; i++) {
        if (narr[i][j] === 1) {
          bb = bb * 10 + graph[i][j];
        } else {
          sub += bb;
          bb = 0;
        }
      }
      sub += bb;
      bb = 0;
    }

    ans = Math.max(ans, sub);
    return;

  } else {
    dfs([...arr, 0]);
    dfs([...arr, 1]);
  }

}

dfs([]);
console.log(ans);
