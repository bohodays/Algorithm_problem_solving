// 문자열 내림차순으로 배치하기

function solution(s) {
  const sArray = s.split("");
  sArray.sort((a, b) => (a > b ? -1 : 1));
  return sArray.join("");
}