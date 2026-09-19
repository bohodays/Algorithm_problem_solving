function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        const currPrice = prices[i];
        let sec = 0;
        for (let j = i + 1; j < prices.length; j++) {
            sec++;
            if (prices[j] < currPrice) break;
        }
        answer.push(sec);
    }
    
    return answer;
}