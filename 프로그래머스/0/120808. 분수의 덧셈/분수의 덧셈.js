const getGcd = (num1, num2) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    const [copyDenom1, copyDenom2] = [denom1, denom2];
    numer1 *= copyDenom2;
    denom1 *= copyDenom2;
    numer2 *= copyDenom1;
    denom2 *= copyDenom1;
    const [resultNumer, resultDenom] = [numer1 + numer2, denom1];
    const gcd = getGcd(resultNumer, resultDenom);
    return [resultNumer / gcd, resultDenom / gcd];
}