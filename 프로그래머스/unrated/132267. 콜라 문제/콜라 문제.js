function solution(a, b, n) {
  let answer = 0;
  while (a <= n) {
    // 마트에서 얻을 수 있는 콜라 개수
    const getItem = Math.floor(n / a) * b;
    answer += getItem;
    // 상빈이가 가지고 있는 콜라 병의 수
    n = (n % a) + getItem;
  }
  return answer;
}