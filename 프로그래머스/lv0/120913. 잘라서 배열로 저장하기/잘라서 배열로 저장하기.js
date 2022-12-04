function solution(my_str, n) {
  var answer = [];
  let checkN = '';
  const strToList = my_str.split('');
  for (const str of strToList) {
    checkN += str
    if (checkN.length === n) {
      answer.push(checkN);
      checkN = '';
    }
  }
  // 남은 문자열 answer에 추가
  if (checkN !== '') {
    answer.push(checkN);
  }
  
  return answer;
}