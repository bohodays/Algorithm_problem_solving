// 예산

function solution(d, budget) {
  // 오름차순 정렬하기
  d.sort((a, b) => a - b);

  // d의 총합이 예산보다 크면 제일 끝값 제거
  while (d.reduce((sum, num) => sum + num, 0) > budget) {
    d.pop();
  }

  return d.length;
}