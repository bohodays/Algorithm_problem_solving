const isGameEnd = (arr) => {
    const checkTable = Array(3).fill().map((_) => Array(3).fill(0));
    arr.forEach((item) => {
        checkTable[item[0]][item[1]] = 1;
    })
    
    // 가로 확인
    for (let i = 0; i < 3; i++) {
        const targetRow = checkTable[i];
        if (targetRow.reduce((sum, num) => sum + num, 0) === 3) {
            return true;
        }
    }
    
    // 세로 확인
    for (let i = 0; i < 3; i++) {
        if ([checkTable[0][i], checkTable[1][i], checkTable[2][i]].reduce((sum, num) => sum + num, 0) === 3) {
            return true;
        }
    }
    
    // 대각선 확인
    if ([checkTable[0][0], checkTable[1][1], checkTable[2][2]].reduce((sum, num) => sum + num, 0) === 3) {
        return true;
    }
    if ([checkTable[0][2], checkTable[1][1], checkTable[2][0]].reduce((sum, num) => sum + num, 0) === 3) {
        return true;
    }
    
    return false;
}

function solution(board) {
    var answer = -1;
    const oTable = [];
    const xTable = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "O") {
                oTable.push([i, j]);
            } else if (board[i][j] === "X") {
                xTable.push([i, j])
            }
        }
    }
    
    // 선공 차례에 후공을 표시한 경우
    if (oTable.length < xTable.length) return 0;
    
    // 후공 차례에 선공을 표시한 경우
    if (oTable.length - xTable.length >= 2) return 0;
    
    // 게임이 종료되었음에도 진행된 경우
    // 선공 차례에서 게임이 종료된 경우
    if (oTable.length >= 3) {
        // 게임이 종료되었는지 확인
        if (isGameEnd(oTable)) {
            if (oTable.length <= xTable.length) return 0;
        }
    }
    // 후공 차례에서 게임이 종료된 경우
    if (xTable.length >= 3) {
        if (isGameEnd(xTable)) {
            if (oTable.length > xTable.length) return 0;
        }
    }
    
    return 1;
}