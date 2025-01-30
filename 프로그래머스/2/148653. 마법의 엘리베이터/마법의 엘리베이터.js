function solution(storey) {
    let answer = 0;
    
    while (storey) {
        const dividedValue = storey % 10;
        
        if (dividedValue < 10 - dividedValue) {
            answer += dividedValue;
            storey = parseInt(storey / 10);
        } else if (dividedValue > 10 - dividedValue) {
            answer += 10 - dividedValue;
            storey = parseInt(storey / 10) + 1;
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