function solution(order) {
    let answer = 0;
    const box = Array(order.length).fill().map((_, i) => order.length - i);
    const stack = [];
    
    
    for (let i = 0; i < order.length; i++) {
        const currOrder = order[i];
        
        if (currOrder === box[box.length - 1]) {
            box.pop();
            answer++;
        } else {
            if (stack.length && stack[stack.length - 1] === currOrder) {
                stack.pop();
                answer++;
            } else {
                while (box.length && currOrder !== box[box.length - 1]) {
                    stack.push(box.pop());
                }
                if (currOrder === box[box.length - 1]) {
                    box.pop();
                    answer++;
                } else {
                    break
                }
                
            }
        }
    }
   
    return answer;
}
