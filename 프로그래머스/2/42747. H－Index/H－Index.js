function solution(citations) {
    let answer = 0;
    
    for (let i = 0; i <= Math.max(...citations); i++) {
        if (citations.filter((a) => a >= i).length >= i) {
            if (citations.filter((b) => b < i).length <= i) {
                answer = i;
            }
        }
    }
    
    return answer;
}