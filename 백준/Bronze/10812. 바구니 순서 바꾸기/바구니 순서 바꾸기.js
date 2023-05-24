// 10812 바구니 순서 바꾸기

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
const cmd = input.splice(1);

const buckets = Array(n)
  .fill()
  .map((v, i) => i + 1);

cmd.forEach((item) => {
  const [i, j, k] = item;
  const front = buckets.slice(k - 1, j);
  const back = buckets.slice(i - 1, k - 1);

  const totalArray = [...front, ...back].reverse();

  for (let index = i - 1; index <= j - 1; index++) {
    buckets[index] = totalArray.pop();
  }
});
console.log(buckets.join(" "));
