// 3190 뱀

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim().split(" "));

const n = +input[0][0];
const k = +input[1][0];
const apples = input.slice(2, 2 + k).map((item) => item.map(Number));
const l = +input[2 + k + 1][0];
const directionChangeInfo = input.slice(2 + k + 1);

let time = 0;

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let nowDirection = 0;

// table 생성
const table = Array(n)
  .fill()
  .map(() => Array(n).fill(0));

// 사과 위치 세팅
for (const apple of apples) table[apple[0] - 1][apple[1] - 1] = 1;

// 뱀의 현재 위치 세팅
table[0][0] = 2;
const queue = [[0, 0]];

while (true) {
  time++;

  const [x, y] = queue[queue.length - 1];

  const nx = x + direction[nowDirection][0];
  const ny = y + direction[nowDirection][1];

  if (0 <= nx && nx < n && 0 <= ny && ny < n) {
    // 다음 위치가 뱀의 몸이라면
    if (table[nx][ny] === 2) break;
    // 다음 위치가 빈 칸이라면
    // queue의 첫 번째 요소(꼬리) 제거 후 빈칸 위치 추가
    else if (table[nx][ny] === 0) {
      const deletePoint = queue.shift();
      table[deletePoint[0]][deletePoint[1]] = 0;
      queue.push([nx, ny]);
      table[nx][ny] = 2;
      // 다음 위치가 사과라면
      // queue에 사과 위치 추가
    } else if (table[nx][ny] === 1) {
      queue.push([nx, ny]);
      table[nx][ny] = 2;
    }
  } else {
    break;
  }

  // 방향전환하는 시간인지 확인
  for (const item of directionChangeInfo) {
    if (+item[0] === time) {
      if (item[1] === "D") {
        nowDirection = (nowDirection + 1) % 4;
      } else if (item[1] === "L") {
        nowDirection -= 1;
        if (nowDirection === -1) nowDirection = 3;
      }
    }
  }
}

console.log(time);
