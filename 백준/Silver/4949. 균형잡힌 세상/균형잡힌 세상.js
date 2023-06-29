// 4949 균형잡힌 세상

const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trimEnd());

input = input.slice(0, input.length - 1);

let answer = "";

for (const items of input) {
  const stack = [];

  for (const item of items) {
    if (item === "(" || item === "[") stack.push(item);
    else if (item === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(item);
    } else if (item === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else stack.push(item);
    }
  }

  if (stack.length) answer += "no" + "\n";
  else answer += "yes" + "\n";
}

console.log(answer);
