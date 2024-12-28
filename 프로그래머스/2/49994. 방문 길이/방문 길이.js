function solution(dirs) {
    let answer = 0;
    
    const d = {
        U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1]
    }
    const visited  = {};    
    
    let [x, y] = [0, 0];
    for (const dir of dirs) {
        const [nx, ny] = [x + d[dir][0], y + d[dir][1]];
        
        if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
            if (!visited["" + x + y + nx + ny] || !visited["" + nx + ny + x + y]) {
                visited["" + x + y + nx + ny] = true;
                visited["" + nx + ny + x + y] = true;
                answer += 1;
            }
            x = nx;
            y = ny;
        }
    }
    
    return answer;
}