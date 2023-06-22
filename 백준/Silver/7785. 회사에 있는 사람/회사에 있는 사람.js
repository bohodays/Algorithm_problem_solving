// 7785 회사에 있는 사람

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const n = +input[0];
const checkItems = input.slice(1);

const checkObj = {};

checkItems.forEach((item) => {
  const splitedItem = item.split(" ");
  const name = splitedItem[0];
  const cmd = splitedItem[1];

  if (cmd === "enter") checkObj[name] = true;
  else delete checkObj[name];
});

const ans = Object.keys(checkObj).sort().reverse();
console.log(ans.join("\n"));
