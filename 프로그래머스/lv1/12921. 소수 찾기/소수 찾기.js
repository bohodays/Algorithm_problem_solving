// 소수 찾기

function solution(n) {
  const primeNumbers = Array(n + 1).fill(false);
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    if (!primeNumbers[i]) {
      ans += 1;
      let multipleNumber = 1;
      while (i * multipleNumber <= n) {
        primeNumbers[i * multipleNumber] = true;
        multipleNumber++;
      }
    }
  }
  return ans;
}