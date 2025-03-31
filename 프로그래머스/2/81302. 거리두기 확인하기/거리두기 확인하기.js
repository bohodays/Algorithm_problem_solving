function solution(places) {
    const answer = [];
    const d = [[-2, 0], [-1, -1], [-1, 0], [-1, 1], [0, -2], [0, -1], [0, 1], [0, 2], [1, -1], [1, 0], [1, 1], [2, 0]]
    const bfs = (table) => {
        
        const people = [];
        // 응시자가 앉아있는 자리 지점 찾기
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (table[i][j] === "P") people.push([i, j]);
            }
        }
        
        for (let i = 0; i < people.length; i++) {
            const [x, y] = people[i];
            // 방향 탐색
            for (let j = 0; j < d.length; j++) {
                const [nx, ny] = [x + d[j][0], y + d[j][1]];
                if (0 <= nx && nx < 5 && 0 <= ny && ny < 5) {
                    if (table[nx][ny] === "P") {
                        if (j === 0) {
                            if (table[nx + 1][ny] === "O") return 0;
                        } else if (j === 1) {
                            if (table[nx + 1][ny] === "O" || table[nx][ny + 1] === "O") return 0;
                        } else if (j === 3) {
                            if (table[nx + 1][ny] === "O" || table[nx][ny - 1] === "O") return 0;
                        } else if (j === 4) {
                            if (table[nx][ny + 1] === "O") return 0;
                        } else if (j === 7) {
                            if (table[nx][ny - 1] === "O") return 0;
                        } else if (j === 8) {
                            if (table[nx - 1][ny] === "O" || table[nx][ny + 1] === "O") return 0;
                        } else if (j === 10) {
                            if (table[nx - 1][ny] === "O" || table[nx][ny - 1] === "O") return 0;
                        } else if (j === 11) {
                            if (table[nx - 1][ny] === "O") return 0;
                        } else {
                            return 0;
                        }
                    }
                }
            }
        }
        
        return 1;
    }
    
    places.forEach((place) => {
        answer.push(bfs(place))
    })
    
    return answer;
}