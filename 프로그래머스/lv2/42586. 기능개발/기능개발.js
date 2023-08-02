function solution(progresses, speeds) {
    const answer = [];
    
    const n = progresses.length;
    
    while (progresses.length) {
        for (let i = 0; i < n; i++) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }
        
        let result = 0;
        while (true) {
            if (progresses[0] >= 100) {
                result++;
                progresses.shift();
                speeds.shift();
            } else {
                break;
            }
        }
        
        if (result) answer.push(result);
    }
    
    
    return answer;
}