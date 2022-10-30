function solution(numbers) {
  const total = numbers.reduce((a, b) => a+b)
  const answer = total / numbers.length
  return answer;
}