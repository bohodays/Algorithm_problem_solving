function solution(board) {
    let answer = 0;
    
    // 8방향
    const d = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    const [h, w] = [board.length, board[0].length];
    
    // 초기 폭탄 위치 구하기
    const bombs = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === 1) bombs.push([i, j]);
        }
    }
    
    // 폭탄 위치 표시하기
    bombs.forEach((item) => {
        const [x, y] = item;
        d.forEach((item) => {
            const [nx, ny] = [x + item[0], y + item[1]];
            if (0 <= nx && nx < h && 0 <= ny && ny < w) {
                board[nx][ny] = 1;
            }
        })
    })
    
    // 안전한 지역의 칸 수 구하기
    board.forEach((h) => {
        h.forEach((w) => {
            if (w === 0) answer += 1
        })
    })
    return answer;
}