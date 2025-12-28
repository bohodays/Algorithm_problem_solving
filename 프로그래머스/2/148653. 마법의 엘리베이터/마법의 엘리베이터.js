function solution(storey) {
    let answer = 0;
    
    while (storey) {
        const dividedValue = storey % 10;
        
        if (dividedValue > 5) {
            answer += 10 - dividedValue;
            storey = parseInt(storey / 10) + 1;
        } else if (dividedValue < 5) {
            answer += dividedValue;
            storey = parseInt(storey / 10);
        } else {
            const checkValue = parseInt(storey / 10) % 10;
            if (checkValue >= 5) {
                answer += 5;
                storey = parseInt(storey / 10) + 1;
            } else {
                answer += 5;
                storey = parseInt(storey / 10);
            }
        }
    }
    
    
    return answer;
}