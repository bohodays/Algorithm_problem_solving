function solution(keymap, targets) {
  const answer = [];

  for (const item of targets) {
    let count = 0;
    for (const s of item) {
      let minIndex = Infinity;
      for (const key of keymap) {
        if (key.includes(s)) {
          const index = key.indexOf(s);
          minIndex = Math.min(minIndex, index);
        }
      }
      if (minIndex !== Infinity) count += minIndex + 1;
      else {
        count = 0;
        break;
      }
    }
    count ? answer.push(count) : answer.push(-1);
  }

  return answer;
}