function solution(before, after) {
  var answer = 0;
  const sortedBefore = before.split('').sort();
  const sortedAfter = after.split('').sort();
  for (let i = 0; i < sortedBefore.length; i++) {
    if (sortedBefore[i] !== sortedAfter[i]) {
      return 0
    }
  }
  return 1
}