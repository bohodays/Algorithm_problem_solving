function solution(s){
    const stack = [];
    
    for (const item of s) {
        // stack이 비어있으면 추가
        if (!stack.length) {
            stack.push(item);
        } else if (stack[stack.length - 1] === "(" && item === ')') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    
    if (stack.length) {
        return false;
    }
    return true;
}