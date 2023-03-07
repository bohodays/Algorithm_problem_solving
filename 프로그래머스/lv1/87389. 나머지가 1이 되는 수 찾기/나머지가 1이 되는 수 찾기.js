// 나머지가 1이 되는 수 찾기

function solution(n) {
  let answer = 0;
  const numberArray = Array(n + 1).fill(false);
  for (let i = 2; i < n; i++) {
    if (!numberArray[i]) {
      if (n % i === 1) {
        return i;
      } else {
        let cnt = 1;
        while (i * cnt <= n) {
          if (!numberArray[i * cnt]) {
            numberArray[i * cnt] = true;
          }
          cnt++;
        }
      }
    }
  }
}


