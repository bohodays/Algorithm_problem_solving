// 1966 프린터 큐

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim())
  .splice(1)
  .map((item) => item.split(" ").map(Number));

const testCase = [];
for (let i = 0; i <= input.length - 1; i += 2) {
  testCase.push([input[i], input[i + 1]]);
}

const ans = [];

for (const item of testCase) {
  const [n, m] = item[0];
  const nums = item[1];

  let targetIndex = m;
  let tmpAns = 0;

  while (true) {
    const checkItem = nums[0];
    // 나머지 문서들과 중요도 비교
    const result = nums.findIndex((item) => item > checkItem);

    // 현재 문서가 가장 중요한 경우
    if (result === -1) {
      tmpAns++;
      if (targetIndex === 0) {
        ans.push(tmpAns);
        break;
      }
      targetIndex--;
      nums.shift();
    }
    // 현재 문서보다 중요한 문서가 있는 경우
    else {
      if (targetIndex === 0) {
        targetIndex = nums.length - 1;
      } else {
        targetIndex--;
      }
      nums.push(nums.shift());
    }
  }
}

console.log(ans.join("\n"));
