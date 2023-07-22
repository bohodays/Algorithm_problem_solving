// 15904 UCPC는 무엇의 약자일까?

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const UCPCArray = ["U", "C", "P", "C"];
let ans;

for (let i = 0; i < input.length; i++) {
  if (input[i] === UCPCArray[0]) UCPCArray.shift();
}

if (UCPCArray.length) ans = "I hate UCPC";
else ans = "I love UCPC";

console.log(ans);
