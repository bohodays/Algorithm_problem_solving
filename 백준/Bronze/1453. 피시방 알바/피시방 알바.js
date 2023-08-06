// 1453 피시방 알바

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => item.split(" ").map(Number));

const guests = input[1];

const PCROOM = Array(101).fill(false);
let ans = 0;

guests.forEach((item) => {
  if (PCROOM[item]) {
    ans++;
  } else {
    PCROOM[item] = true;
  }
})

console.log(ans);