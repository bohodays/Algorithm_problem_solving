function solution(order) {
    let answer = 0;
    
    const stack = [];
    let index = 0;
    for (let i = 1; i <= order.length; i++) {
        if (i === order[index]) {
            index++;
            answer++;
        } else {
            stack.push(i);
        }
        
        while (stack.length && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
            answer++;
        }
        
    }
    
    return answer;
}