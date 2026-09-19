function solution(x, y, n) {
    var answer = 0;
    const MAX_VALUE = 1000001;
    const dp = Array(y + 1).fill(MAX_VALUE);
    dp[x] = 0;
    
    for (let i = x + 1; i <= y; i++) {
        // x에 n을 더하는 경우
        if (i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1);
        
        // x에 2를 곱하는 경우
        if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        
        // x에 3를 곱하는 경우
        if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        
    }
    
    return dp[y] === MAX_VALUE ? -1 : dp[y];
}