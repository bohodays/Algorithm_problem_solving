// 풍선 터뜨리기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => item.trim().split(" ").map(Number))

const n = input[0][0];
const numbers = input[1].reverse();

const tmpArray = [];
let target = 1;
let answer = "Nice";

while (numbers.length) {
  const checkItem = numbers[numbers.length - 1];
  if (target === checkItem) {
    numbers.pop();
    target++;
  } else {
    if (target === tmpArray[tmpArray.length - 1]) {
      tmpArray.pop();
      target++
    } else {
      tmpArray.push(numbers.pop())
    }
  }
}

while (tmpArray.length) {
  const checkItem = tmpArray.pop();
  if (checkItem !== target) {
    answer = "Sad";
    break;
  } else {
    target++;
  }
}

console.log(answer);