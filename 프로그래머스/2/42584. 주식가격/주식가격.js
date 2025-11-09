function solution(prices) {
    const answer = [];
    const n = prices.length;
    
    for (let i = 0; i < n; i++) {
        let time = 0;
        const currentPrice = prices[i];
        for (let j = i + 1; j < n; j++) {
            time++;
            if (currentPrice > prices[j]) break;
        }
        answer.push(time);
    }
    
    return answer;
}