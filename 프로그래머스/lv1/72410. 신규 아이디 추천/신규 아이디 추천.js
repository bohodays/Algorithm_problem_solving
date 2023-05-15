function solution(new_id) {
  let answer = new_id;

  // 1단계
  answer = answer.toLocaleLowerCase();

  // 2단계
  answer = answer.replace(/([^a-z-.0-9_])/g, "");

  // 3단계
  const stack = [];
  answer = answer.split("");
  for (const item of answer) {
    if (!stack.length) {
      stack.push(item);
    } else {
      if (item === "." && stack[stack.length - 1] === ".") {
        continue;
      } else {
        stack.push(item);
      }
    }
  }
  answer = stack;

  // 4단계
  if (answer[0] === ".") answer.shift();
  if (answer[answer.length - 1] === ".") answer.pop();

  // 5단계
  if (!answer.length) answer.push("a");

  // 6단계
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    if (answer[answer.length - 1] === ".") {
      answer.pop();
    }
  }

  // 7단계
  if (answer.length <= 2) {
    while (answer.length !== 3) {
      answer.push(answer[answer.length - 1]);
    }
  }
  return answer.join("");
}