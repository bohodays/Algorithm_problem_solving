// 13909 창문 닫기

const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const ans = parseInt(Math.sqrt(n));
console.log(ans);
