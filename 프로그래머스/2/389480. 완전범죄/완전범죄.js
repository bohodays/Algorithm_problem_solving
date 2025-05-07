function solution(info, n, m) {
    const MAX = Infinity;
    let answer = MAX;
    const itemCount = info.length;
    
    // i번째 물건을 훔쳤고, B의 흔적 총합이 j일 때, A의 흔적 최소합
    const dp = Array(itemCount + 1).fill().map((_) => Array(m).fill(MAX));
    dp[0][0] = 0; // 초기 상태
    
    for (let i = 0; i < itemCount; i++) {
        const [aTrace, bTrace] = info[i];
        
        for (let b = 0; b < m; b++) {
            if (dp[i][b] === MAX) continue;
            
            // 1. A가 i번째 물건을 훔친다 -> A의 흔적 합 증가, B는 그대로
            if (dp[i + 1][b] > dp[i][b] + aTrace) dp[i + 1][b] = dp[i][b] + aTrace;
            
            // 2. B가 i번째 물건을 훔친다. -> A는 그대로, B의 흔적 합 증가
            const nextB = b + bTrace;
            if (nextB < m) {
                if (dp[i + 1][nextB] > dp[i][b]) {
                    dp[i + 1][nextB] = dp[i][b];
                }
            }
        }
    }
    
    if (dp[itemCount]) {
        dp[itemCount].forEach((item) => {
            if (item < n) answer = Math.min(answer, item);
        })
    }

    
    
    return answer === MAX ? -1 : answer;
}