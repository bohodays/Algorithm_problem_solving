function solution(citations) {
    let answer = 0;
    
    for (let h = 0; h <= Math.max(...citations); h++) {
        const stack1 = [];
        const stack2 = [];
        
        citations.forEach((citation) => {
            if (citation >= h) stack1.push(citation);
            else stack2.push(citation);
        });
        
        if (stack1.length >= h && stack2.length <= h) answer = Math.max(answer, h);
    };
    
    return answer;
}