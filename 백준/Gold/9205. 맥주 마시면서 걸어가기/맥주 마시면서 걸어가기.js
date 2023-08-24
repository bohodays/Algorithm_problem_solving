const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((item) => item.trim().split(" ").map(Number));

const t = input[0][0];
const tmp = input.slice(1);
const testCases = [];

while (tmp.length) {
    const tmpArray = tmp.splice(0, tmp[0][0] + 3);
    testCases.push(tmpArray);
}

let ans = [];
for (const item of testCases) {
    const [ n ] = item.splice(0, 1)[0];
    const points = item;

    const bfs = (startPointX, startPointY, n, points) => {
        const queue = [[startPointX, startPointY]];
        const visited = Array(n + 2).fill(false);
        visited[0] = true;

        while (queue.length) {
            const [x, y] = queue.shift();

            for (let i = 0; i < n + 2; i++) {
                const [nx, ny] = points[i];
                // 방문하지 않았다면
                if (!visited[i]) {
                    if (Math.abs(nx - x) + Math.abs(ny - y) <= 1000) {
                        visited[i] = true;
                        queue.push([nx, ny])
                    }
                }
            }
        }
        return visited;
    }

    const visited = bfs(points[0][0], points[0][1], n, points);
    ans.push(visited[visited.length - 1] ? "happy" : "sad");
}

console.log(ans.join("\n"));