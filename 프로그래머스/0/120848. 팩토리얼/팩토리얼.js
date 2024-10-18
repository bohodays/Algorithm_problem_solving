const factorial = (number) => {
    let answer = 1;
    for (let i = 1; i <= number; i++) {
        answer *= i;
    }
    return answer;
}

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        const tempValue = factorial(i);
        if (tempValue > n) {
            break;
        }
        answer = i
    }
    return answer;
}