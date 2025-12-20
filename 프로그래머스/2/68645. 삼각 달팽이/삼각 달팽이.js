function solution(n) {
    const answer = [];
    const table = Array(n).fill().map((_) => Array(n).fill(0));
    const target = n**2 / 2 + n / 2;

    // 직각삼각형 방향 회전 설정
    const d = [[1, -1], [0, 1], [-1, 0]];
    
    // 시작지점 설정
    const queue = [[0, n - 1]];
    table[0][n - 1] = 1;
    let index = 0;
    
    while (queue.length) {
        const [x, y] = queue.pop();
        
        if (table[x][y] === target) break;
        
        const [nx, ny] = [x + d[index][0], y + d[index][1]];
        
        // 범위 체크
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            // 방문 여부 체크
            if (!table[nx][ny]) {
                table[nx][ny] = table[x][y] + 1;
                queue.push([nx, ny])
            } else {
                index = (index + 1) % 3;
                queue.push([x, y]);
            }
        } else {
            index = (index + 1) % 3;
            queue.push([x, y]);
        }
    }

    table.forEach((row) => {
        row.forEach((num) => {
            if (num) answer.push(num)
        })
    })
    
    return answer;
}