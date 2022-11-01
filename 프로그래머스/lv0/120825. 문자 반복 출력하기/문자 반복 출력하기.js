function solution(my_string, n) {
  var answer = '';
  [...my_string].forEach((string) => {
    for (let i = 0; i < n; i++) {
      answer += string
    }
  })
  return answer;
}