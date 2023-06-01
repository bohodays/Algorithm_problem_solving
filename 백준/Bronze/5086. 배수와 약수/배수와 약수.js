// 5086 배수와 약수

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

let ans = "";

input.forEach((item) => {
  const num1 = item[0];
  const num2 = item[1];

  if (num1 && num2) {
    if (num2 % num1 === 0) ans += "factor" + "\n";
    else if (num1 % num2 === 0) ans += "multiple" + "\n";
    else ans += "neither" + "\n";
  }
});

console.log(ans);
