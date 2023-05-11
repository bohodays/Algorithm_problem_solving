// 11382 꼬마 정민

const fs = require("fs");
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((num) => +num);

console.log(A + B + C)