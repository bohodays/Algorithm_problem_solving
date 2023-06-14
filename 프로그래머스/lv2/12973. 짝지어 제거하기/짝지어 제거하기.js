function solution(s) {
  const stack = [];

  for (const item of s) {
    // 스택이 비어있으면 아이템 추가
    if (!stack.length) {
      stack.push(item);
    } else {
      if (stack[stack.length - 1] === item) {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  }

  if (!stack.length) return 1;
  return 0;
}
