function solution(order) {
  const target = ['3', '6', '9']
  const numberToString = String(order).split('')
  const answer = numberToString.filter((number) => {
    return target.includes(number)
  }).length
  return answer;
}