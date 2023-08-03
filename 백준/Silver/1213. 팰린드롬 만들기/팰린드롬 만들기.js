// 1213 팰린드롬 만들기

const fs = require("fs");
const word = fs.readFileSync("/dev/stdin").toString().trim();

const wordObj = {};
for (const str of word) {
  wordObj[str] = wordObj[str] ? wordObj[str] + 1 : 1;
}

let fillArray = new Array(word.length).fill('');

let isPossible = true;
let centerStr = "";

for (const item in wordObj) {
  //  홀수이면
  if (wordObj[item] % 2 !== 0) {
    if (centerStr === "") {
      centerStr = item;
      wordObj[item]--;
    } else {
      isPossible = false;
    }
  }
}

if (!isPossible) {
  console.log("I'm Sorry Hansoo");
} else {
  let i = 0;

  const keyArray = Object.keys(wordObj).sort();

  for (const item of keyArray) {
    const count = wordObj[item];
    for (let j = 0; j < count / 2; j++) {
      fillArray[i] = item;
      fillArray[fillArray.length - i - 1] = item;
      i++;
    }
  }

  if (centerStr !== "") {
    const centerIdx = Math.floor(fillArray.length / 2);
    fillArray[centerIdx] = centerStr;
  }

  console.log(fillArray.join(""));
}



