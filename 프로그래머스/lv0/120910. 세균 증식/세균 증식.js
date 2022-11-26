function solution(n, t) {
  while (t) {
    n = n * 2
    t--;
  }
  return n;
}