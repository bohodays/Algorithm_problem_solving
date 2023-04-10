// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
  return strings;
}