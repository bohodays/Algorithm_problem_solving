function solution(n, m) {
    // 최대 공약수 구하는 함수
    const getGCD = (num1, num2) => {
        let result = 1;
        for (let i = 1; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                result = i;
            }
        }
        return result;
    }
    
    const gdc = getGCD(n, m);
    return [gdc, n * m / gdc];
}