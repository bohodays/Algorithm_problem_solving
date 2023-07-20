// 1439 뒤집기

const fs = require("fs");
const strs = fs.readFileSync("/dev/stdin").toString().trim();

const checkStrs = (strs, target) => {
  let stack = [];
  let ans = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== target) stack.push(strs[i]);
    else {
      if (stack.length) {
        stack = [];
        ans++;
      }
    }
  }

  if (stack.length) ans++;

  return ans;
};

console.log(Math.min(checkStrs(strs, "0"), checkStrs(strs, "1")));
