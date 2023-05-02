function solution(dartResult) {
  let score = 0;
  const answer = [];
  let tmp = 0; // 숫자 담을 변수
  
  for (let i = 0; i < dartResult.length; i++) {
      // 숫자이면
      if (!isNaN(dartResult[i])) {
          // 10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 해주기
          if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
              tmp = 10;
              i++;
          } else {
              tmp = +dartResult[i];
          }
      // 1제곱
      } else if (dartResult[i] === "S") {
          answer.push(tmp);
      // 2제곱
      } else if (dartResult[i] === 'D') {
          answer.push(tmp**2);
      // 3제곱
      } else if (dartResult[i] === 'T') {
          answer.push(tmp**3);
      } else if (dartResult[i] === '#') {
          answer[answer.length - 1] *= -1;
      } else if (dartResult[i] === '*') {
          answer[answer.length - 1] *= 2;
          answer[answer.length - 2] *= 2;
      }
  
  }
  return answer.reduce((sum, num) => sum + num)
}