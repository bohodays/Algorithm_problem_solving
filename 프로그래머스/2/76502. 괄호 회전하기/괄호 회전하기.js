const onCheckItem = (s) => {
    const stack = [];
    for (const item of s) {
        if (!stack.length) stack.push(item);
        else {
            if (item === "]" && stack[stack.length - 1] === "[") stack.pop();
            else if (item === ")" && stack[stack.length - 1] === "(") stack.pop();
            else if (item === "}" && stack[stack.length - 1] === "{") stack.pop();
            else stack.push(item);
        }
    }
    return stack.length === 0 ? true : false;
}

function solution(s) {
    let answer = 0;
    const n = s.length;
    
    s += s;
    for (let i = 0; i < n; i++) {
        if (onCheckItem(s.slice(i, i + n))) answer++;
    }
    
    
    return answer;
}