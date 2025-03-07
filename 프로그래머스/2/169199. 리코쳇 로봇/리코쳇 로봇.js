function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우
    let start, goal;
    
    // 시작 위치(R)와 목표 위치(G) 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
        }
    }
    
    const queue = [[...start, 0]]; // [x, y, 이동 횟수]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;
    
    while (queue.length) {
        const [x, y, moves] = queue.shift();
        
        if (x === goal[0] && y === goal[1]) return moves;
        
        for (let [dx, dy] of directions) {
            let nx = x, ny = y;
            
            // 장애물 또는 경계를 만날 때까지 이동
            while (nx + dx >= 0 && nx + dx < rows && ny + dy >= 0 && ny + dy < cols && board[nx + dx][ny + dy] !== 'D') {
                nx += dx;
                ny += dy;
            }
            
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, moves + 1]);
            }
        }
    }
    
    return -1;
}