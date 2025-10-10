function solution(order) {
    let answer = 0;
    
    const stack = [];
    order = order.reverse();
    const boxes = Array(order.length).fill().map((_, i) => i + 1);
    
    boxes.forEach((box, index) => {
        stack.push(box);
        
        while (stack.length && stack[stack.length - 1] === order[order.length - 1]) {
            stack.pop();
            order.pop();
            answer++;
        }
    })
    
    return answer;
}