function solution(str1, str2) {
  // str1을 str2를 기준으로 split
  const check = str1.split(str2).length;
  // str1안에 str2가 없는 경우, check는 1이 된다.
  if (check === 1) {
    return 2
  } else {
    return 1
  }
}