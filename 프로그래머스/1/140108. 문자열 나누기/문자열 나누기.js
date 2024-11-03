function solution(s) {
    let answer = 0;
    
    let target = "";
    let targetCount = 0;
    let compareCount = 0;
    for (const item of s) {
        if (target) {
            if (item === target) {
                targetCount++;
            } else {
                compareCount++;
            };
            if (targetCount === compareCount) {
                answer += 1;
                target = "";
                targetCount = 0;
                compareCount = 0;
            };
        } else {
            target = item;
            targetCount++;
        }
    }
        
    if (targetCount || compareCount) answer++;
    
    return answer;
}