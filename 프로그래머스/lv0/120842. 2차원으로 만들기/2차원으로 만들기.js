function solution(num_list, n) {
  const answer = [];
  let saveData = []
  for (const num of num_list) {
    if (saveData.length === n) {
      answer.push(saveData);
      saveData = [num];
    } else {
      saveData.push(num)
    }
  }
  answer.push(saveData);
  return answer;
}