function solution(numbers) {
  let answer = 1;
  const maxNumber1 = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  answer *= maxNumber1;
  const maxNumber2 = numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  answer *= maxNumber2;
  return answer;
}