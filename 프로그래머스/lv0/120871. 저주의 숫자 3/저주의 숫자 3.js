function solution(n) {
  let i = 1;
  let answer = 1;
  while (true) {
    if (i >= n) {
      break
    }

    i += 1;
    answer += 1;

    while (true) {
      if (answer % 3 === 0) {
        answer += 1;
      } else if (String(answer).includes('3')) {
        answer += 1;
      } else {
        break
      }
    }
  }
  return answer;
}