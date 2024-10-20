const getGcd = (num1, num2) => {
    let gcd = 0;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function solution(a, b) {
    let checkValue = b / getGcd(a, b);
    while (checkValue % 2 === 0 || checkValue % 5 === 0) {
        if (checkValue % 2 === 0) {
            checkValue /= 2;
        } else {
            checkValue /= 5;
        }
    }
    return checkValue === 1 ? 1 : 2;
}