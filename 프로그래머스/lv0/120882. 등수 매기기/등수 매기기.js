function solution(scores) {
  var answer = [];
  const avgArray = [];
  // 학생들의 평균 점수를 구한다.
  for (const score of scores) {
    avgArray.push((score[0] + score[1]) / 2)
  }

  // 평균 점수가 담겨있는 배열을 내림차순으로 정렬한다.
  const sortedAvgArray = Array.from(avgArray).sort((a,b) => b-a)
  // 평균 점수를 하나씩 순회하면서 정렬된 평균 점수에서의 인덱스를 구하고 1을 더해서 answer에 저장한다.
  for (const score of avgArray) {
    answer.push(sortedAvgArray.indexOf(score) + 1)
  }
  return answer;
}