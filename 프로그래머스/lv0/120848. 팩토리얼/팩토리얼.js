function solution(n) {
  let answer = 1;
  let result = 1;
  while (true) {
    result *= answer

    if (result === n) {
      return answer;
    } else if (result > n) {
      return answer-1;
    }
    answer++;
  }
}