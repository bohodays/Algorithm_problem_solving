// 가장 가까운 같은 글자

function solution(s) {
  const stringObject = {};
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (stringObject[s[i]] === 0 || stringObject[s[i]]) {
      // 객체에 해당 키가 있으면
      answer[i] = i - stringObject[s[i]];
      stringObject[s[i]] = i;
    } else {
      // 객체에 해당 키가 없으면
      answer[i] = -1;
      stringObject[s[i]] = i;
    }
  }
  return answer;
}