function solution(s) {
    let answer = 0;
    const n = s.length;
    s = s + s;
    const ref = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    for (let i = 0; i < n; i++) {
        const slicedS = s.slice(i, i + n);
        
        const stack = [];
        for (const item of slicedS) {
            if (!stack.length) stack.push(item);
            else {
                if (ref[stack[stack.length - 1]] === item) stack.pop();
                else stack.push(item);
            }
        }
        
        if (!stack.length) answer++
    }
    
    return answer;
}