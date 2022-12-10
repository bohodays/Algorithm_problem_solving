function solution(bin1, bin2) {
  const result = parseInt(bin1, 2) + parseInt(bin2, 2)
  const answer = result.toString(2)
  return answer;
}