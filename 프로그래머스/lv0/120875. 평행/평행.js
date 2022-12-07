function solution(dots) {
  const check1 = Math.abs((dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]))
  const check2 = Math.abs((dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]))

  const check3 = Math.abs((dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]))
  const check4 = Math.abs((dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]))
  
  const check5 = Math.abs((dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]))
  const check6 = Math.abs((dots[2][1] - dots[1][1] / dots[2][0] - dots[1][0]))
  if (check1 === check2) {
    return 1;
  } else if (check3 === check4) {
    return 1;
  } else if (check5 === check6) {
    return 1;
  }
  return 0;
}