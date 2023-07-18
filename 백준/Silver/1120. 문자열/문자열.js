// 1120 문자열

const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let minValue = A.length;

for (let i = 0; i <= B.length - A.length; i++) {
  let tmpMinValue = 0;

  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[j + i]) tmpMinValue++;
  }

  minValue = Math.min(minValue, tmpMinValue);
}

console.log(minValue);
