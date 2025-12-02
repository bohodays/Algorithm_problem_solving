function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack.length && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  // 아직 k가 남아 있으면 뒤에서 k개 제거
  return stack.slice(0, stack.length - k).join("");
}
