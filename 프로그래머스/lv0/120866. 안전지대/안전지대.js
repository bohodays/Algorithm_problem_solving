function solution(board) {
  var answer = 0;

  // 시계 순서대로 방향 탐색
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  // 1이 있는 좌표 찾기
  const checkOne = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        checkOne.push([i,j])
      }
    }
  }

  // 1이 있는 좌표를 대상으로 범위내에서 8방향 1로 만들기
  for (let i = 0; i < checkOne.length; i++) {
    for (let j = 0; j < 8; j++) {
      let nx = checkOne[i][0] + dx[j]
      let ny = checkOne[i][1] + dy[j]
      if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
        if (board[nx][ny] !== 1) {
          board[nx][ny] = 1;
        }
      }
    }
  }

  // 0의 개수 세기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        answer += 1
      }
    }
    
  }
  return answer;
}