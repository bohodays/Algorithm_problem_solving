// 문자열 나누기

function solution(s) {
  let answer = 0;
  let targetString = "";
  let sameCount = 0;
  let anotherSameCount = 0;
  for (const item of s) {
    if (!targetString) {
      targetString = item;
      sameCount = 1;
    } else {
      if (targetString !== item) {
        anotherSameCount += 1;
      } else {
        sameCount += 1;
      }

      if (sameCount === anotherSameCount) {
        answer += 1;
        sameCount = 0;
        anotherSameCount = 0;
        targetString = "";
      }
    }
  }
  if (targetString) {
    answer += 1;
  }
  return answer;
}

