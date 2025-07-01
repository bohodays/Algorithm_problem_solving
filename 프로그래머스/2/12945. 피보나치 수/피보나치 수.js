function solution(n) {
    let answer = 0;
    const fibo = [0, 1];
    
    while (fibo.length !== n + 1) {
        fibo.push(fibo[fibo.length - 1]  % 1234567 + fibo[fibo.length - 2]  % 1234567)
    }
    return fibo[fibo.length - 1] % 1234567;
}