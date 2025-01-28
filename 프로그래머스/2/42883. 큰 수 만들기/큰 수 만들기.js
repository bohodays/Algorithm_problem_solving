function solution(number, k) {
    const stack = [];
    let removeCount = 0;
    
    for (let i = 0; i < number.length; i++) {
        const currentNumber = number[i];
        
        while (stack.length && stack[stack.length - 1] < currentNumber && removeCount < k) {
            stack.pop();
            removeCount++;
        }
        
        stack.push(currentNumber);
    }
    
    // 9876543, 2 -> 이러한 케이스 고려
    while (removeCount < k) {
        stack.pop();
        removeCount++;
    }
        
    
    return stack.join("");
}