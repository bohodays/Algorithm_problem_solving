// 1373 2진수 8진수

const fs = require('fs');
let binaryNumber = fs.readFileSync('/dev/stdin').toString().trim();

let oct = '';
while (binaryNumber.length >= 3) {
  oct = parseInt(binaryNumber.slice(binaryNumber.length - 3), 2).toString(8) + oct;
  binaryNumber = binaryNumber.slice(0, binaryNumber.length - 3);
}

console.log((binaryNumber ? parseInt(binaryNumber, 2).toString(8) : '') + oct);