function solution(prices) {
    const answer = [];
    let index = 0;
    
    while (index !== prices.length - 1) {
        const currentPrice = prices[index];
        
        let time = 0;
        for (let i = index + 1; i < prices.length; i++) {
            time++;
            if (currentPrice > prices[i]) {
                break;
            }
        }
        answer.push(time);
        index++;
    }
    
    answer.push(0);
    
    return answer;
}