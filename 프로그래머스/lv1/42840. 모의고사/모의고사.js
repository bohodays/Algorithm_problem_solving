function solution(answers) {
  const mathGiveUper1 = [1, 2, 3, 4, 5];
  const mathGiveUper2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const mathGiveUper3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === mathGiveUper1[i % 5]) {
      answer1++;
    }
    if (answers[i] === mathGiveUper2[i % 8]) {
      answer2++;
    }
    if (answers[i] === mathGiveUper3[i % 10]) {
      answer3++;
    }
  }
  const maxValue = Math.max(answer1, answer2, answer3);

  const ans = [];
  if (answer1 === maxValue) ans.push(1);
  if (answer2 === maxValue) ans.push(2);
  if (answer3 === maxValue) ans.push(3);
  return ans;
}