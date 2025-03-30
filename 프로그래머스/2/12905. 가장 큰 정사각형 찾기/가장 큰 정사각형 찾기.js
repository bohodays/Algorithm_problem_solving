function solution(board)
{
    let answer = 0;
    const n = board.length;
    const m = board[0].length;
    
    if (n <= 1 || m <= 1) return 1;
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (board[i][j]) {
                const up = board[i - 1][j];
                const left = board[i][j - 1];
                const cross = board[i - 1][j - 1];
                const minValue = Math.min(up, left, cross);
                board[i][j] = minValue + 1;
                answer = Math.max(answer, board[i][j]);
            }
        }
    }

    return answer**2;
}