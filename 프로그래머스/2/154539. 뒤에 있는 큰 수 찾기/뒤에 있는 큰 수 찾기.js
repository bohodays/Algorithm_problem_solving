function solution(numbers) {
    const n = numbers.length
    const answer = Array(n).fill(-1);
    
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        const currentItem = numbers[i];
        
        while (stack.length && currentItem >= stack[stack.length - 1]) {
            stack.pop();
        }
        
        if (stack.length) answer[i] = stack[stack.length - 1];
        
        stack.push(currentItem);
    }
    
    return answer;
}