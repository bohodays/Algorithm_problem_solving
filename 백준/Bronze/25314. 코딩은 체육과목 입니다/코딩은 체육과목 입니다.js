// 25314 코딩은 체육과목 입니다

const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let ans = "long ";
console.log(ans.repeat(n / 4) + "int");
