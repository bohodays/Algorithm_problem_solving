function solution(number) {
  let answer = 0;

  const dfs = (currentArray, count) => {
    if (currentArray.length === 3) {
      answer += currentArray.reduce((sum, num) => sum + num) === 0 ? 1 : 0;
      return;
    }

    for (let i = count; i < number.length; i++) {
      dfs([...currentArray, number[i]], i + 1);
    }
  };
  dfs([], 0);
  return answer;
}
