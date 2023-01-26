// 10972 다음 순열
// N과 M 방식으로 완전탐색하면 메모리초과가 발생한다. next permutations 이라는 개념을 사용해야 한다.
// 1 4 3 2를 예시로 알고리즘을 알아본다.
// 뒤에서부터 순열을 비교하며, 뒷 값이 앞 값보다 큰 경우까지 반복한다. (3,2), (4,3)은 해당하지 않고, (1,4)가 해당된다. 
  // 이 때, 1의 인덱스를 x라고 칭한다.
  // 4의 인덱스는 y라고 한다.
// 다시 뒤에서부터 값을 비교하며 인덱스 x보다 큰 값이 있으면 그 값과 swap한다.
  // 1과 2를 비교했고, 2가 크기 때문에 이 둘을 swap한다.
// y에 해당하는 인덱스부터 sort(오름차순정렬)를 한 뒤에 이어 붙인다.
  // 4 3 1을 sort해서 1 3 4가 된다.
  // 이어 붙이기 때문에 2 1 3 4가 된다.

const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(inputData[0]);
let targetSeq = inputData[1].split(' ').map((num) => +num);
let find = false;
let ans = -1;

for (let i = n - 1; i > 0; i--) {
  if (targetSeq[i - 1] < targetSeq[i]) {
    for (let j = n - 1; j > 0; j--) {
      if (targetSeq[i - 1] < targetSeq[j]) {
        [targetSeq[i - 1], targetSeq[j]] = [targetSeq[j], targetSeq[i - 1]];
        targetSeq = [...targetSeq.slice(0, i), ...targetSeq.slice(i).sort((a, b) => a - b)];
        find = true;
        break;
      }
    }
  }
  if (find) {
    ans = targetSeq.join(' ');
    break;
  }
}

console.log(ans);
