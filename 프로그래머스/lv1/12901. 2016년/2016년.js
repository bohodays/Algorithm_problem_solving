function solution(a, b) {
  const answer = new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
  return answer;
}
