function solution(a, b) {

  let getGCD = (num1, num2) => {
    let gcd = 1;
  
    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }

  // 최대 공약수 구하기
  const gcd = getGCD(a, b);

  let checkedValue = b / gcd;

  while (true) {
    if (checkedValue % 2 === 0) {
      checkedValue /= 2;
    } else if (checkedValue % 5 === 0) {
      checkedValue /= 5;
    } else {
      break;
    }
  }

  if (checkedValue === 1) {
    return 1;
  } else {
    return 2;
  }
}