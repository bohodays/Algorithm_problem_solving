// 3085 사탕 게임

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
const table = inputData.slice(1).map((v) => v.trim().split(''));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let ans = 1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k <= 3; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        let flag = false;
        if (table[i][j] !== table[nx][ny]) {
          [table[i][j], table[nx][ny]] = [table[nx][ny], table[i][j]];
          flag = true;
        }

        // 가로 검사
        let stack = [];
        let result = 1;
        for (const item of table[i]) {
          if (!stack.length) stack.push(item);
          else if (stack[stack.length - 1] === item) stack.push(item);
          else if (stack[stack.length - 1] !== item) {
            if (stack.length > result) result = stack.length;
            stack = [item];
          }
        }
        if (stack.length && stack.length > result) result = stack.length; 
        if (result > ans) ans = result;

        // 세로 검사
        const tmpArray = [];
        for (const array of table) {
          tmpArray.push(array[j]);
        }
        stack = [];
        result = 1;
        for (const item of tmpArray) {
          if (!stack.length) stack.push(item);
          else if (stack[stack.length - 1] === item) stack.push(item);
          else if (stack[stack.length - 1] !== item) {
            if (stack.length > result) result = stack.length;
            stack = [item];
          }
        }
        if (stack.length && stack.length > result) result = stack.length; 
        if (result > ans) ans = result;

        if (flag) {
          [table[i][j], table[nx][ny]] = [table[nx][ny], table[i][j]];
        }
      }
    }
  }
}
console.log(ans);
// console.log(n);
// console.log(table);