// 1543 문서 검색

const fs = require("fs");
const [document, word] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim());

const splitedDocument = document.split(word);

console.log(splitedDocument.length - 1);
