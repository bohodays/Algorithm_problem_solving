function solution(x, y, n) {
    var answer = 0;
    const dp = Array(y + 1).fill(1000001);
    dp[x] = 0;
    
    for (let i = x + 1; i <= y; i++) {
        if (i - n >= 0) {
            dp[i] = Math.min(dp[i], dp[i - n] + 1);
        }
        
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
        
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }
    

    return dp[y] !== 1000001 ? dp[y] : -1;
}