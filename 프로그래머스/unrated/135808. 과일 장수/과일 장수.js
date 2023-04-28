function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);
    while (score.length >= m) {
        const tmpArray = [];
        while (true) {
            const popedItem = score.pop();
            tmpArray.push(popedItem);
            
            if (tmpArray.length === m) {
                answer += Math.min(...tmpArray) * m;
                break;
            }
        }  
    }
    return answer;
}