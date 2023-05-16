// 둘 만의 암호

function solution(s, skip, index) {
  let answer = "";
  const notSkipedString = [];
  for (let i = 97; i <= 122; i++) {
    const alphabet = String.fromCharCode(i);
    if (!skip.includes(alphabet)) {
      notSkipedString.push(alphabet);
    }
  }

  for (const item of s) {
    // skip에 포함되어 있지 않다면
    if (!skip.includes(item)) {
      const targetIndex = notSkipedString.indexOf(item);
      answer += notSkipedString[(targetIndex + index) % notSkipedString.length];
      // skip에 포함되어 있다면
    } else {
      answer += item;
    }
  }
  return answer;
}