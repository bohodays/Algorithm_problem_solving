const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number).slice(1);

const testCases = [];

while (input.length) {
  const i = input[0];
  testCases.push(input.splice(0, i + 1));
}

let ans = "";

testCases.forEach((item) => {
  const numbers = item.slice(1);
  const maxValue = Math.max(...numbers);
  const result = numbers.filter((item) => item === maxValue);

  if (result.length > 1) {
    ans += "no winner" + "\n";
  } else {
    const sumValue = numbers.reduce((sum, num) => sum + num);
    const index = numbers.findIndex((item) => item === maxValue) + 1;
    if (result[0] > sumValue / 2) {
      ans += `majority winner ${index}` + "\n";
    } else {
      ans += `minority winner ${index}` + "\n";
    }
  }
})

console.log(ans);
