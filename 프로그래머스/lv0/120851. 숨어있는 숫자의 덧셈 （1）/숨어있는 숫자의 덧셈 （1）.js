function solution(my_string) {
  var answer = 0;
  const checkArray = my_string.split('');
  for (const string of checkArray) {
    // '===' 은 타입과 값이 모두 같아야 하지만
    // '=='은 타입이 달라도 값만 같으면 true를 반환한다.
    if (Number(string) == string) {
      answer += Number(string)
    }
  }
  return answer;
}