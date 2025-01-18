function solution(n) {
    let answer = 0;
    
    const result = Array(n + 1).fill(0);
    result[0] = 1;
    result[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        result[i] = (result[i - 1] % 1000000007) + (result[i - 2] % 1000000007);
    }
    
    return result[n] % 1000000007;
}
