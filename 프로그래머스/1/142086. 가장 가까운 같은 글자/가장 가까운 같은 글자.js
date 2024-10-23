function solution(s) {
    const answer = [];
    const stack = [];
    
    for (const item of s) {
        const targetIndex = stack.indexOf(item);
        if (targetIndex === -1) answer.push(-1);
        else {
            answer.push(targetIndex + 1)
        }
        
        stack.push(item);
    }
    return answer;
}