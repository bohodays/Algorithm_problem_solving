function solution(n) {
  // 조건을 만족하는 퀸 배치 방법의 수를 저장하는 변수
  let count = 0;

  // board[i]는 i번째 행에 있는 퀸이 놓인 열(col)을 의미함
  const board = [];

  // 현재 행(row)의 col 열에 퀸을 놓을 수 있는지 확인하는 함수
  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      // 같은 열에 퀸이 이미 존재하는 경우 (세로 공격)
      if (board[i] === col) {
        return false;
      }

      // 대각선에 퀸이 이미 존재하는 경우
      // 두 위치 (i, board[i])와 (row, col)가 대각선에 있는지 확인
      if (Math.abs(board[i] - col) === row - i) {
        return false;
      }
    }

    // 현재 위치는 안전하게 퀸을 놓을 수 있음
    return true;
  }

  // row번째 행에 퀸을 배치하는 함수 (재귀 호출을 사용)
  function placeQueen(row) {
    // 모든 행에 퀸을 배치했으면 유효한 해이므로 count 증가
    if (row === n) {
      count++;
      return;
    }

    // 현재 행(row)에 대해 0부터 n-1까지의 열(col)에 퀸을 놓아본다
    for (let col = 0; col < n; col++) {
      // 현재 위치가 다른 퀸들과 충돌하지 않으면
      if (isSafe(row, col)) {
        // 현재 행(row)에 퀸을 col 열에 배치
        board[row] = col;

        // 다음 행(row + 1)에 퀸 배치 시도
        placeQueen(row + 1);

        // 이후 재귀가 끝나면 이전 상태로 돌아와 다음 col 시도 (백트래킹)
        // board[row] 값은 덮어써지므로 따로 초기화할 필요는 없음
      }
    }
  }

  // 0번째 행부터 퀸 배치 시작
  placeQueen(0);

  // 모든 경우의 수 계산 후 결과 반환
  return count;
}
