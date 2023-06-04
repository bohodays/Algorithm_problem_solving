// 1735 분수 합

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

const A = input[0];
const B = input[1];

const mulAAndB = [A[0] * B[1] + B[0] * A[1], A[1] * B[1]];

let i = 2;
while (true) {
  if (mulAAndB[0] % i === 0 && mulAAndB[1] % i === 0) {
    mulAAndB[0] /= i;
    mulAAndB[1] /= i;
  } else {
    i++;
  }

  if (i > mulAAndB[1]) break;
}

console.log(mulAAndB.join(" "));
