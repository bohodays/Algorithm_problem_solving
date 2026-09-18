function solution(progresses, speeds) {
    let answer = [];
    const n = progresses.length;
    
    let i = 0;
    while (i < n) {
        // 작업 진행하기
        progresses.forEach((item, index) => progresses[index] += speeds[index]);
        
        // 배포할 작업 계산하기
        let count = 0;
        while (progresses[i] >= 100) {
            count++;
            i++;
        }
        
        // 배포할 작업 있으면 반영하기
        if (count) answer.push(count);
    }
    
    return answer;
}