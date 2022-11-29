function solution(my_string) {
  var answer = '';
  for (const string of my_string) {
    if (string === string.toUpperCase()) {
      answer += string.toLowerCase()
    } else {
      answer += string.toUpperCase()
    }
  }
  return answer;
}
