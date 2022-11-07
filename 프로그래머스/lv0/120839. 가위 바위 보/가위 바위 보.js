function solution(rsp) {
  var answer = '';
  const rspArray = rsp.split("");
  for (item of rspArray) {
    if (item === '2') {
      answer += '0'
    } else if (item === '0') {
      answer += '5'
    } else {
      answer += '2'
    }
  }
  return answer;
}