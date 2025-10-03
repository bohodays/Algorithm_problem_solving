const isPrime = (n) => {
    if (n <= 1) return false;
    
    for (let i = 2; i <= n**(1/2); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}


function solution(n, k) {
    let answer = 0;
    
    const convertN = n.toString(k).split("0");
    convertN.forEach((num) => {
        if (isPrime(Number(num))) answer += 1;
    });
    
    return answer;
}