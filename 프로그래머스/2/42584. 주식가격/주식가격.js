function solution(prices) {
    const answer = [];
    const n = prices.length;
    
    for (let i = 0; i < n; i++) {
            let time = 0;
            const price = prices[i];
            for (let j = i + 1; j < n; j++) {
                time++;
                if (price > prices[j]) break;
            }
            answer.push(time);
    }
    
    return answer;
}