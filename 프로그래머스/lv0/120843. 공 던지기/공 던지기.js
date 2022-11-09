function solution(numbers, k) {
  let answer= 0;
  k--;
  while (k) {
    answer = (answer+2)%numbers.length;
    k--;
  }
  return numbers[answer];
}
