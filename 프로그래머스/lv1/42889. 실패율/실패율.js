function solution(N, stages) {
  const ans = [];

  for (let i = 1; i <= N; i++) {
    const targetNumber = i;
    let totalPlayers = 0;
    let totalFailPlayers = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= targetNumber) {
        totalPlayers++;
        if (stages[j] === targetNumber) {
          totalFailPlayers++;
        }
      }
    }
    ans.push([i, totalFailPlayers / totalPlayers]);
  }
  ans.sort((a, b) => b[1] - a[1]);
  return ans.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
}