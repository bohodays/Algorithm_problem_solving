// 시저 암호

function solution(s, n) {
  let ans = "";
  const LowerCase = [];
  const UpperCase = [];
  // 소문자 알파벳 배열 생성
  for (let i = 97; i <= 122; i++) {
    LowerCase.push(String.fromCharCode(i));
  }
  // 대문자 알파벳 배열 생성
  for (let i = 65; i <= 90; i++) {
    UpperCase.push(String.fromCharCode(i));
  }

  for (let i = 0; i < s.length; i++) {
    // 공백이면 공백 입력
    if (s[i] === " ") {
      ans += " ";
      // 공백이 아니라면
    } else {
      // 대문자이면
      if (UpperCase.includes(s[i])) {
        const targetIndex = UpperCase.indexOf(s[i]);
        ans += UpperCase[(targetIndex + n) % 26];
        // 소문자이면
      } else {
        const targetIndex = LowerCase.indexOf(s[i]);
        console.log(targetIndex);
        ans += LowerCase[(targetIndex + n) % 26];
      }
    }
  }

  return ans;
}