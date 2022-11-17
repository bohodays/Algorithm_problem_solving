function solution(my_string) {
  const checkArray = [ 'a', 'e', 'i', 'o', 'u' ]
  var answer = ''; 
  my_string.split('').forEach((string) => {
    if (!checkArray.includes(string)) {
      answer += string
    }
  })
  return answer;
}