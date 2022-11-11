function solution(n) {
  var answer = 0;
  while (n) {
    for (let i = 2; i <= n-1; i++) {
      if (n % i === 0) {
        answer += 1;
        break
      }
    }
    n--;
  }
  return answer;
}