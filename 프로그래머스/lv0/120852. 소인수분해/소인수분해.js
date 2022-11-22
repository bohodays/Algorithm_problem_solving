function solution(n) {
  var answer = [];
  // i는 2부터 시작
  let i = 2;
  while (true) {
    // n을 i로 나누었을 때, 나누어 떨어지면
    if (n % i === 0) {
      // answer 배열에 i를 psuh
      answer.push(i);
      // n을 i로 나누어준다.
      n /= i;
    // n을 i로 나누었을 때, 나누어 떨어지지 않는다면
    } else {
      i++;
    }

    if (n === 1) {
      break
    }
  }
  return [...new Set(answer)];
}