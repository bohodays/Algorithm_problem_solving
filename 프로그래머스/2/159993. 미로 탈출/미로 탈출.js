// 전략
// 2세트의 bfs 수행
// start - lever, lever - end
    
const bfs = (startPointX, startPointY, endPointX, endPointY, maps, visited, table, n, m) => {
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    const queue = [[startPointX, startPointY]];
    visited[startPointX][startPointY] = true;

    while (queue.length) {
        const [x, y] = queue.shift();
        
        if (x === endPointX && y === endPointY) return;
        
        for (let i = 0; i < 4; i++) {
            const nx = x + d[i][0];
            const ny = y + d[i][1];
            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                if (!visited[nx][ny] && maps[nx][ny] !== "X") {
                    visited[nx][ny] = true;
                    table[nx][ny] = table[x][y] + 1;
                    queue.push([nx, ny])
                }
            }
        }
    }

}


function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;

    
    const startToLever = Array(n).fill().map((_) => Array(m).fill(0));
    const visited1 = Array(n).fill().map((_) => Array(m).fill(false));
    const leverToEnd = Array(n).fill().map((_) => Array(m).fill(0));
    const visited2 = Array(n).fill().map((_) => Array(m).fill(false));

    // 시작지점 찾기
    let startX;
    let startY;
    let leverX;
    let leverY
    let endX;
    let endY;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === "S") [startX, startY] = [i, j];
            else if (maps[i][j] === "L") [leverX, leverY] = [i, j];
            else if (maps[i][j] === "E") [endX, endY] = [i, j];
        }
    }

    bfs(startX, startY, leverX, leverY, maps, visited1, startToLever, n, m)
    bfs(leverX, leverY, endX, endY, maps, visited2, leverToEnd, n, m)
    
    const resultA = startToLever[leverX][leverY];
    const resultB = leverToEnd[endX][endY]
    
    return resultA !== 0 && resultB !== 0 ? resultA + resultB : -1;
}