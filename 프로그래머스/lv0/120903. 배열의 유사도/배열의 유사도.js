function solution(s1, s2) {
  var answer = 0;
  s1.forEach((item) => {
    if (s2.includes(item)) {
      answer += 1;
    }
  })
  return answer;
}