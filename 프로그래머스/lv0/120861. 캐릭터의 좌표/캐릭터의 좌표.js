function solution(keyinput, board) {
  var answer = [];
  let initX = 0;
  let initY = 0;
  const boundaryValueX = parseInt(board[0] / 2)
  const boundaryValueY = parseInt(board[1] / 2)
  keyinput.forEach((key) => {
    if (key === 'left' && initX !== -boundaryValueX) {
      initX -= 1;
    } else if (key === 'right' && initX !== boundaryValueX) {
      initX += 1;
    } else if (key === 'up' && initY !== boundaryValueY) {
      initY += 1;
    } else if (key === 'down' && initY !== -boundaryValueY) {
      initY -= 1;
    }
  })
  answer.push(initX);
  answer.push(initY);
  return answer;
}

