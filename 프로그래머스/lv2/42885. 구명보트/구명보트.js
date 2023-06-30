// 이분탐색

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => a - b);

  let start = 0;
  let last = people.length - 1;

  while (start < last) {
    const sumValue = people[start] + people[last];
    // 더한 값이 limit보다 크면 작은 값 하나만 탈출
    if (sumValue > limit) {
      last--;
      // 그 외에는 양 끝값 탈출
    } else {
      start++;
      last--;
    }
    answer++;
  }

  if (start === last) answer++;

  return answer;
}