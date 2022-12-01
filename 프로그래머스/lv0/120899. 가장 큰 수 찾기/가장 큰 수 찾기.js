function solution(array) {
  var answer = [];
  const maxNumber = Math.max(...array);
  answer.push(maxNumber)
  answer.push(array.indexOf(maxNumber))
  return answer;
}