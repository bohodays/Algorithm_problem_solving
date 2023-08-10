const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => item.trim().split(" ").map(Number));

const [ n, k ] = input[0];
const numbers = input[1].sort((a, b) => a - b);

console.log(numbers[k - 1]);