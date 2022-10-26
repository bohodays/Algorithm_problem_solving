function solution(denum1, num1, denum2, num2) {
  const answer = []
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let MIN_VALUE = Math.min(denum, num);

  while (MIN_VALUE) {
    if (denum % MIN_VALUE === 0 && num % MIN_VALUE === 0) {
      denum /= MIN_VALUE;
      num /= MIN_VALUE;
      answer.push(denum);
      answer.push(num);
      return answer;
    }
    MIN_VALUE--;
  }

  return answer;
}