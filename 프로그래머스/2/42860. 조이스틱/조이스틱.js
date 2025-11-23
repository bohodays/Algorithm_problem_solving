function solution(name) {
  let answer = 0;
  const len = name.length;

  // 1. 세로(▲▼) 이동 횟수 합산
  for (let i = 0; i < len; i++) {
    const charCode = name.charCodeAt(i);
    const up = charCode - 'A'.charCodeAt(0);          // 위로 이동
    const down = 'Z'.charCodeAt(0) - charCode + 1;    // 아래로 이동
    answer += Math.min(up, down);
  }

  // 2. 가로(◀▶) 이동 최소값 계산
  let move = len - 1; // 그냥 오른쪽으로만 쭉 가는 경우가 기본값

  for (let i = 0; i < len; i++) {
    let j = i + 1;

    // i 다음부터 연속된 A 구간의 끝을 찾는다.
    while (j < len && name[j] === 'A') {
      j++;
    }

    // i까지 갔다가 되돌아가거나, 끝에서 다시 오는 여러 경로 중 최소를 반영
    // i : 앞으로 간 거리
    // len - j : 뒤에서부터 다시 올 때의 거리
    move = Math.min(
      move,
      i + len - j + Math.min(i, len - j)
    );
  }

  answer += move;
  return answer;
}
