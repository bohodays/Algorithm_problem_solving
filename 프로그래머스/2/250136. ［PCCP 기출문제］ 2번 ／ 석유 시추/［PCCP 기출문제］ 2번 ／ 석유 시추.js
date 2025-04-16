function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const d = [[1, 0], [-1, 0], [0, -1], [0, 1]];

    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const idMap = Array.from({ length: n }, () => Array(m).fill(-1));
    const oilSizes = [];
    let id = 0;

    // Step 1: BFS로 덩어리 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && land[i][j] === 1) {
                let count = 1;
                const queue = [[i, j]];
                visited[i][j] = true;
                idMap[i][j] = id;

                let idx = 0;
                while (idx < queue.length) {
                    const [x, y] = queue[idx++];
                    for (const [dx, dy] of d) {
                        const nx = x + dx, ny = y + dy;
                        if (
                            0 <= nx && nx < n &&
                            0 <= ny && ny < m &&
                            !visited[nx][ny] &&
                            land[nx][ny] === 1
                        ) {
                            visited[nx][ny] = true;
                            idMap[nx][ny] = id;
                            queue.push([nx, ny]);
                            count++;
                        }
                    }
                }
                oilSizes[id++] = count;
            }
        }
    }

    // Step 2: 각 열(column)을 기준으로, 지나가는 덩어리들의 id 모아 크기 합산
    let maxOil = 0;
    for (let col = 0; col < m; col++) {
        const seen = new Set();
        let sum = 0;
        for (let row = 0; row < n; row++) {
            const curId = idMap[row][col];
            if (curId !== -1 && !seen.has(curId)) {
                seen.add(curId);
                sum += oilSizes[curId];
            }
        }
        maxOil = Math.max(maxOil, sum);
    }

    return maxOil;
}
