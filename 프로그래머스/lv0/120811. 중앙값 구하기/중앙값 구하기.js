function solution(array) {
  const answer = array.sort((a, b) => a - b);
  return answer[parseInt(answer.length / 2)];
}