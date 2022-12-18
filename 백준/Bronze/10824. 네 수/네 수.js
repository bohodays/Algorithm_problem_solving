// 10824 네 수

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const num1 = Number(inputData[0] + inputData[1]);
const num2 = Number(inputData[2] + inputData[3]);

console.log(num1 + num2);

