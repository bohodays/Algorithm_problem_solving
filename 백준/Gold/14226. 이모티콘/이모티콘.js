// 14226 이모티콘

const fs = require('fs');
const S = Number(fs.readFileSync('/dev/stdin').toString().trim());

const visited = Array(1001).fill().map(() => Array(1001).fill(false));

const bfs = (screen, clipboard, count) => {
  const queue = [[1, 0, 0]];

  while (queue.length) {
    [screen, clipboard, count] = queue.shift();

    if (screen === S) {
      console.log(count);
      return;
    }

    for (let i = 0; i < 3; i++) {
      if (i === 0) {                                                          // 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장한다.
        [newScreen, newClipboard] = [screen, screen];
      } else if (i === 1) {                                                   // 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기 한다.
        [newScreen, newClipboard] = [screen + clipboard, clipboard]
      } else {
        [newScreen, newClipboard] = [screen - 1, clipboard];
      }

      if (0 <= newScreen && newScreen <= 1000 && 0 <= newClipboard && newClipboard <= 1000) {
        if (!visited[newScreen][newClipboard]) {
          visited[newScreen][newClipboard] = true;
          queue.push([newScreen, newClipboard, count + 1]);
        }
      }
    }
  }
};

bfs(1, 0, 0);