function solution(array, height) {
  var answer = array.filter((target) => target > height).length;
  return answer;
}