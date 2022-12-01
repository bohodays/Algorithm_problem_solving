function solution(my_string) {
  var answer = 0;
  const result = my_string.split(' ');
  let i = 0;
  while (true) {
    if (result[i] === '+') {
      answer += Number(result[i+1])
      i += 2;
    } else if (result[i] === '-') {
      answer -= Number(result[i+1])
      i += 2;
    } else {
      answer = Number(result[i])
      i += 1;
    }
    if (i >= result.length) {
      break
    }
  }

  return answer;
}