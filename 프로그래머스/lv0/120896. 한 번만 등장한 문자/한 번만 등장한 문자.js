function solution(s) {
  let answer = [];
  const stringToArray = s.split('');
  for (const string of stringToArray) {
    const target = stringToArray.filter((targetNumber) => targetNumber === string)
    if (target.length === 1) {
      answer.push(string)
    }
  }
  return answer.sort().join('');
}