function solution(n) {
    let answer = new Set();
    for (let i = 1; i <= parseInt(n**(1/2)); i++) {
        if (n % i === 0) {
            answer.add(i);
            answer.add(n / i);
        }
    }
    return [...answer].sort((a, b) => a - b);
}