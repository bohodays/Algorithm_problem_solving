function solution(s){
    const stack = [];
    
    for (const item of s) {
        if (!stack.length) stack.push(item);
        else {
            if (stack[stack.length - 1] === "(" && item === ")") {
                stack.pop();
            } else {
                stack.push(item);
            }
        }
    }

    return stack.length ? false : true;
}