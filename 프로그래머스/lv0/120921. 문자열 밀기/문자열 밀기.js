function solution(A, B) {
  var answer = 0;
  const stringToArray = A.split('');

  if (A === B) {
    return 0
  }

  while (true) {
    answer += 1;
    stringToArray.unshift(stringToArray.pop());
    if (stringToArray.join('') === B) {
      return answer
    } else if (answer === A.length) {
      return -1
    }
  }
}