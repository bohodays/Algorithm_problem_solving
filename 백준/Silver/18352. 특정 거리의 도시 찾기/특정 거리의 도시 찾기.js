// 18352 특정 거리의 도시 찾기

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim().split(" ").map(Number));

const [n, m, k, x] = input[0];
const roads = input.slice(1);
const connects = Array(n + 1)
  .fill()
  .map(() => Array());

for (const item of roads) {
  connects[item[0]].push(item[1]);
}

let ans = [];
const distances = Array(n + 1).fill(0);

const bfs = (startPoint) => {
  const queue = [startPoint];
  distances[startPoint] = 1;

  while (queue.length) {
    const point = queue.shift();

    if (distances[point] === k + 1) {
      ans.push(point);
      continue;
    }

    for (const newPoint of connects[point]) {
      if (!distances[newPoint]) {
        distances[newPoint] = distances[point] + 1;
        queue.push(newPoint);
      }
    }
  }
};

bfs(x);

if (ans.length) {
  ans = ans.sort((a, b) => a - b).join("\n");
} else ans = -1;

console.log(ans);
