// 2587 대표값2

const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num).sort((a, b) => a - b);

const avg = numbers.reduce((sum, num) => sum + num) / 5
const median = numbers[2];

console.log(avg);
console.log(median);

