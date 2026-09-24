function solution(m, n, board) {
    var answer = 0;
    board = board.map((row) => row.split(""));
    
    while (true) {
        // 블록 지워진 여부
        let isChanged = false;
        const removedBlocks = new Set();
        
        // 탐색하며 지워질 블록 체크
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] !== 0 && board[i][j] === board[i + 1][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j + 1]) {
                    isChanged = true;
                    removedBlocks.add(`${i}-${j}`);
                    removedBlocks.add(`${i + 1}-${j}`);
                    removedBlocks.add(`${i}-${j + 1}`);
                    removedBlocks.add(`${i + 1}-${j + 1}`);
                }
            }
        }
        
        // 지워질 블록 반영
        [...removedBlocks].forEach((block) => {
            const [x, y] = block.split("-").map((i) => Number(i));
            board[x][y] = 0;
        })
        
        // 지워진 블록 개수 반영
        answer += removedBlocks.size;
        

        // 지워진 블록 아래로 내리기
        // 아래에서 위로 탐색하며 위치 바꾸기
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                // 현재 위치가 지워진 블록이면 위로 올라가며 지워진 블록 탐색
                if (board[i][j] === 0) {
                    for (let k = i - 1; k >= 0; k--) {
                        if (board[k][j] !== 0) {
                            board[i][j] = board[k][j];
                            board[k][j] = 0;
                            break;
                        }
                    }
                }
            }
        }
        
        if (!isChanged) break;
    }
    
    return answer;
}