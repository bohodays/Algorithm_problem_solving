// 최대 공약수와 최소 공배수

function solution(n, m) {
  // 최대 공약수를 구하는 함수
  const getGCD = (num1, num2) => {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  };

  // 최대 공약수
  const GCD = getGCD(n, m);
  // 최소 공배수
  const LCD = (n * m) / GCD;

  const answer = [GCD, LCD];
  return answer;
}