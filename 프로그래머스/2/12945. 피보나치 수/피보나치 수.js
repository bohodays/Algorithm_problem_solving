function solution(n) {
    var answer = 0;
    const fiboArray = Array(100001).fill(0);
    fiboArray[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        fiboArray[i] = (fiboArray[i - 1] % 1234567) + (fiboArray[i - 2] % 1234567);
    }
    return fiboArray[n] % 1234567;
}