function solution(board, moves) {
  let answer = 0;

  const boardObj = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      boardObj[j + 1]
        ? boardObj[j + 1].push(board[i][j])
        : (boardObj[j + 1] = [board[i][j]]);
    }
  }

  // moves 배열에 맞춰 번호 담기
  const removeArray = [];
  for (const num of moves) {
    for (let i = 0; i < board.length; i++) {
      if (boardObj[num][i] !== 0) {
        removeArray.push(boardObj[num][i]);
        boardObj[num][i] = 0;
        break;
      }
    }
  }

  // 붙어있는 번호 제거하기
  const stack = [];
  for (const item of removeArray) {
    if (!stack.length) {
      stack.push(item);
    } else {
      if (stack[stack.length - 1] === item) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(item);
      }
    }
  }

  return answer;
}