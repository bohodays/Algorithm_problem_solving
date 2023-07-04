function solution(k, tangerine) {
  let answer = 0;
  const obj = {};

  tangerine.forEach((item) => {
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  });

  const kind = Object.values(obj).sort((a, b) => b - a);

  for (const item of kind) {
    answer++;
    k = k - item;

    if (k <= 0) break;
  }

  return answer;
}