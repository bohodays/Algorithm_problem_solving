function solution(numbers) {
    const answer = [];
    const stack = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        const curr = numbers[i];
        while (stack.length && curr >= stack[stack.length - 1]) {
            stack.pop();
        }
        
        if (stack.length) answer.push(stack[stack.length - 1]);
        else answer.push(-1);
        
        stack.push(curr);
    }
    
    return answer.reverse();
}