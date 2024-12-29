const isPrimeNumber = (n) => {
    if (n <= 1) return false;
    
    for (let i = 2; i <= parseInt(n**(0.5)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

function solution(n, k) {
    let answer = 0;
    
    const numberArray = n.toString(k).split("0").map((item) => +item);
    numberArray.forEach((num) => {
        if (isPrimeNumber(num)) answer++;
    })
    
    return answer;
}