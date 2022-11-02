function solution(my_string, letter) {
  my_string = [...my_string]
  const answer = my_string.filter(string => string !== letter).join("")
  return answer
}