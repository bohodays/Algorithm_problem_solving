function solution(lines) {
  // 좌표를 담을 객체 생성
  const obj = {}
  // lines를 순회하며 해당 지점을 키로 객체에 추가
  // 주의할 점) i < line[1] 의 범위로 지정해야 한다. i <= line[1] 하면 오차가 발생한다.
  for (const line of lines) {
    for (let i = line[0]; i < line[1]; i++) {
      if (obj[i]) {
        obj[i] += 1  
      } else {
        obj[i] = 1;
      }
    }
  }

  let answer = 0
  for (const item in obj) {
    // 겹쳐있는 부분의 개수 구하기
    if (obj[item] >= 2) {
        answer += 1
    }
  }
  if (answer === 0)  return 0
  else return answer
}