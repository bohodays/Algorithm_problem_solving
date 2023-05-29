// 19532 수학은 비대면강의입니다

const fs = require("fs");
let [a, b, c, d, e, f] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => +num);

function solution() {
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(x, y);
        return;
      }
    }
  }
}

solution();
