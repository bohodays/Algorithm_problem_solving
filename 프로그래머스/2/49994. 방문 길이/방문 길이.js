function solution(dirs) {
    let answer = 0;
    
    const direction = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1]
    };
    const visited = {};
    
    let x = 0, y = 0;
    for (const dir of dirs) {
        const [dx, dy] = [direction[dir][0], direction[dir][1]];
        const nx = x + dx, ny = y + dy;
        
        // 범위 유효성 체크
        if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
            // 방문 체크
            if (!visited["" + x + y + nx + ny] && !visited["" + nx + ny + x + y]) {
                visited["" + x + y + nx + ny] = true;
                visited["" + nx + ny + x + y] = true;
                answer++;
            }
            x = nx;
            y = ny;
        }
        
        
    }
    
    
    return answer;
}