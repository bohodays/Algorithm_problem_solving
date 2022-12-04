// 2751 수 정렬하기 2

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => +num);

const sortedNumbers = inputData.splice(1).sort((a, b) => a - b);

console.log(sortedNumbers.join('\n'));