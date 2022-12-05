function solution(dots) {
  const result = [];
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][1] === dots[i][1]) {
      result.push(Math.abs(dots[0][0] - dots[i][0]))
    } else if (dots[0][0] === dots[i][0]) {
      result.push(Math.abs(dots[0][1] - dots[i][1]));
    }
  }
  var answer = result[0] * result[1];
  return answer;
}

