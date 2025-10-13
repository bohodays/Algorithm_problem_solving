function solution(x, y, n) {
    const dp = Array(y + 1).fill(Infinity);
    dp[x] = 0;
    
    for (let i = x + 1; i <= y; i++) {
        
        // x에 n을 더하는 경우
        if (i - n >= 0) dp[i] = Math.min(dp[i], dp[i - n] + 1);
        
        // x에 2를 곱하는 경우
        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        
        // x에 3을 곱하는 경우
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        
    }
    
    return dp[y] === Infinity ? -1 : dp[y];
}