// 2167 2차원 배열의 합

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) =>
    item
      .trim()
      .split(" ")
      .map((num) => +num)
  );

const [n, m] = input[0];
const array = [];
array.push(...input.slice(1, n + 1));

const cmds = input.slice(n + 2);

const answer = [];

for (const cmd of cmds) {
  const [x1, y1, x2, y2] = cmd;

  let sumValue = 0;

  for (let i = x1 - 1; i <= x2 - 1; i++) {
    for (let j = y1 - 1; j <= y2 - 1; j++) {
      sumValue += array[i][j];
    }
  }

  answer.push(sumValue);
}

console.log(answer.join("\n"));
