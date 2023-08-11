function solution(n) {
    const answer = Array(n).fill().map(() => Array(n).fill(0));
    
    // 나선모양 방향 설정
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let index = 0;
    let count = 1;
    let [x, y] = [0, 0];
    answer[x][y] = count;
    
    while (true) {
        if (count === n**2) break;
        
        const nx = x + dx[index];
        const ny = y + dy[index];
        
        if (0 <= nx && nx < n && 0 <= ny && ny < n && !answer[nx][ny]) {
            answer[nx][ny] = ++count;
            [x, y] = [nx, ny]
        } else {
            index = (index + 1) % 4;
        }
        
    }
    return answer;
}