// 2138 전구와 스위치

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(inputData[0]);
const currentState = inputData[1].trim().split("").map(Number);
const targetState = inputData[2].trim().split("").map(Number);

const checkState = (array1, array2) => {
  for (let i = 0; i < N; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const switchState = (array1, array2) => {
  const copyState = [...array1];
  let count = 0;
  for (let i = 1; i < N; i++) {
    // 이전 전구가 같은 상태이면 pass
    if (copyState[i - 1] === array2[i - 1]) {
      continue;
    }
    // 상태를 다를 경우
    count += 1;
    for (let j = i - 1; j < i + 2; j++) {
      if (j < N) {
        copyState[j] = 1 - copyState[j];
      }
    }
  }
  return checkState(copyState, array2) ? count : Number.MAX_SAFE_INTEGER;
};

// 첫 번째 전구의 스위치를 누르지 않는 경우
const res1 = switchState(currentState, targetState);

// 첫 번째 전구의 스위치를 누르는 경우
currentState[0] = 1 - currentState[0];
currentState[1] = 1 - currentState[1];

const res2 = switchState(currentState, targetState) + 1;

const ans = Math.min(res1, res2);
console.log(ans !== Number.MAX_SAFE_INTEGER ? ans : -1);
