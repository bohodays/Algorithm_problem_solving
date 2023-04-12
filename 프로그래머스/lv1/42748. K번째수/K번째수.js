// K번째수

function solution(array, commands) {
  const answer = [];

  for (const command of commands) {
    const i = command[0];
    const j = command[1];
    const k = command[2];

    const slicedArray = array.slice(i - 1, j);
    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[k - 1]);
  }
  return answer;
}