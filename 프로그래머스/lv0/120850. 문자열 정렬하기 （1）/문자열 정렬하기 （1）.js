function solution(my_string) {
  const answer = my_string.replace(/[^0-9]/g, '')
                          .split('')
                          .map((number) => Number(number))
                          .sort((a,b) => a-b)
  return answer;
}