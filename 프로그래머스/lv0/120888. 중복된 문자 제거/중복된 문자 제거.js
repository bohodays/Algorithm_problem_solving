function solution(my_string) {
  const answer = [...new Set(my_string.split(''))].join('');
  return answer;
}