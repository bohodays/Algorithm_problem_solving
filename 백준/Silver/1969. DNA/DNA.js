// 1969 DNA

const fs = require("fs");
const DNAs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim())
  .splice(1);

let ansDNA = "";
let ansCnt = 0;

for (let i = 0; i < DNAs[0].length; i++) {
  const obj = {};

  for (let j = 0; j < DNAs.length; j++) {
    obj[DNAs[j][i]] = obj[DNAs[j][i]] ? obj[DNAs[j][i]] + 1 : 1;
  }

  let maxValue = 0;
  const keys = Object.keys(obj);
  let tmpArray = [];

  for (const key of keys) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      tmpArray = [key];
    } else if (obj[key] === maxValue) {
      tmpArray.push(key);
    }
  }

  tmpArray.sort();

  ansDNA += tmpArray[0];
  const diffKeys = keys.filter((item) => item !== tmpArray[0]);
  for (const diffKey of diffKeys) {
    ansCnt += obj[diffKey];
  }
}

console.log(ansDNA);
console.log(ansCnt);
