function solution(progresses, speeds) {
    const answer = [];
    
    let currentCount = 0;
    const limitCount = progresses.length;
    while (currentCount < limitCount) {
        
        for (let i = currentCount; i < limitCount; i++) {
            progresses[i] += speeds[i];
        }
        
        let result = 0;
        while (progresses[currentCount] >= 100) {
            currentCount++;
            result++;
        }
        
        if (result) answer.push(result);
    }
    
    return answer;
}