function solution(progresses, speeds) {
    const answer = [];

    while (progresses.length) {
        if (progresses[0] >= 100) {
            
            let count = 0;
            while (progresses.length && progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
            
        } else {
            progresses.forEach((item, index) => {
                progresses[index] += speeds[index];
            })
        }
    }
    
    return answer;
}