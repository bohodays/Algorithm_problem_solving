// 소수 판별 함수
const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;
    
    for (let i = 3; i <= parseInt(num**(1/2)); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    let answer = 0;
    
    const convertN = n.toString(k).split("0");
    for (const num of convertN) {
        if (num && isPrime(Number(num))) answer++;
    }
    
    return answer;
}