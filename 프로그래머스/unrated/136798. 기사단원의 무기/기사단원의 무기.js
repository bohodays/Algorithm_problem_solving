// 기사단원의 무기

function solution(number, limit, power) {
  // 약수의 개수를 구하는 함수
  const getDivisors = (number) => {
    let divisors = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (i ** 2 === number) {
        divisors += 1;
      } else if (number % i === 0) {
        divisors += 2;
      }
    }
    return divisors;
  };

  const knight = [];
  for (let i = 1; i <= number; i++) {
    const getDivisor = getDivisors(i);
    if (getDivisor > limit) {
      knight.push(power);
    } else {
      knight.push(getDivisor);
    }
  }

  return knight.reduce((sum, num) => sum + num);
}