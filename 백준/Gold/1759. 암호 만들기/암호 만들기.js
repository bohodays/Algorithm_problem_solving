// 1759 암호 만들기

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = inputData[0].split(' ').map((num) => +num);
const words = inputData[1].split(' ').sort();
const vowels = ['a', 'e', 'i', 'o', 'u'];

let ans = '';
const result = [];

const dfs = (count, idx, vowlesCount, consonantsCount) => {
  if (count === L) {
    if (vowlesCount >= 1 && consonantsCount >= 2) {
      ans += result.join('') + '\n';
    }
    return;
  }

  for (let i = idx; i < C; i++) {
    result.push(words[i]);
    if (vowels.includes(words[i])) dfs(count + 1, i + 1, vowlesCount + 1, consonantsCount);
    else dfs(count + 1, i + 1, vowlesCount, consonantsCount + 1);
    result.pop();
  }
}

dfs(0, 0, 0, 0);
console.log(ans);