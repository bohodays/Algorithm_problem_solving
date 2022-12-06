function solution(sides) {
  var answer = 0;
  // sides의 최대값이 가장 긴 변인 경우
  let firstSide = Math.max(...sides)
  let secondSide = Math.min(...sides)
  answer += secondSide

  // 나머지 한 변이 가장 긴 변인 경우
  thirdSide = firstSide + secondSide - 1
  answer += (thirdSide - firstSide)
  return answer;
}
