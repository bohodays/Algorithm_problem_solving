const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = input.split("0");
const b = input.split("1");
const ansA = a.filter((item) => item !== "");
const ansB = b.filter((item) => item !== "");

console.log(Math.min(ansA.length, ansB.length));