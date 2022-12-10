function solution(i, j, k) {
  var answer = 0;
  for (let index = i; index < j+1; index++) {
    const numberToStr = String(index);
    if (numberToStr.includes(String(k))) {
      for (const checkItem of numberToStr) {
        if (checkItem === String(k)) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

