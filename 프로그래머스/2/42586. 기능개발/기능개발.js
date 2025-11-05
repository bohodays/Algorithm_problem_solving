function solution(progresses, speeds) {
    const answer = [];
    
    let currentIndex = 0;
    while (currentIndex !== progresses.length) {
        
        // 기능 개선 작업 수행
        progresses.forEach((progress, i) => {
            progresses[i] += speeds[i];
        })
        
        let count = 0;
        while (progresses[currentIndex] >= 100) {
            count++;
            currentIndex++;
        }
        
        if (count > 0) answer.push(count);
    }
    
    return answer;
}