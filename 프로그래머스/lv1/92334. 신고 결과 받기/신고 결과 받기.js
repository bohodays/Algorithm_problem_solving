function solution(id_list, report, k) {
  const target = {};
  const targetCount = {};

  const reportDeduplication = [...new Set(report)];

  for (const item of reportDeduplication) {
    const splitedItem = item.split(" ");
    if (targetCount[splitedItem[1]]) targetCount[splitedItem[1]]++;
    else targetCount[splitedItem[1]] = 1;

    if (target[splitedItem[0]]) target[splitedItem[0]].push(splitedItem[1]);
    else target[splitedItem[0]] = [splitedItem[1]];
  }

  const answer = [];

  for (const item of id_list) {
    let count = 0;
    if (target[item]) {
      for (const targetItem of target[item]) {
        if (targetCount[targetItem] >= k) {
          count++;
        }
      }
      answer.push(count);
    } else {
      answer.push(0);
    }
  }

  return answer;
}