function solution(progresses, speeds) {
    const answer = [];
    let currentIndex = 0;
    const n = progresses.length;
    
    while (currentIndex <= n - 1) {
        progresses.forEach((progress, index) => {
            progresses[index] += speeds[index];
        })
        
        let result = 0;
        for (let i = currentIndex; i < n; i++) {
            if (progresses[i] >= 100) {
                currentIndex++;
                result++;
            } else {
                break;
            }
        }
        
        if (result > 0) answer.push(result);
    }
    
    return answer;
}