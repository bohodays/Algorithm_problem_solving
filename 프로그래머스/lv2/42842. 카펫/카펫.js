function solution(brown, yellow) {
  const answer = [];

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    // 나누어 떨어지면
    if (yellow % i === 0) {
      const width = yellow / i;
      const height = i;

      const checkValue = width * 2 + height * 2 + 4;
      if (checkValue === brown) {
        answer.push(width + 2, height + 2);
        return answer;
      }
    }
  }
}