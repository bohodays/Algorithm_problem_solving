function solution(n) {
  var answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i === n / i) {
        answer.push(i)
      } else {
        answer.push(i);
        answer.push(n / i);
      }
    }
  }
  answer.sort((a,b) => a - b)
  return answer;
}