function checkCorrect(array) {
    const stack = [];
    for (let i = 0; i < array.length; i++) {
        const targetItem = array[i];
        if (!stack.length) {
            stack.push(targetItem);
        } else {
            if (stack[stack.length - 1] === "(" && targetItem === ")") {
                stack.pop();
            } else if (stack[stack.length - 1] === "[" && targetItem === "]") {
                stack.pop();
            } else if (stack[stack.length - 1] === "{" && targetItem === "}") {
                stack.pop();
            } else {
                stack.push(targetItem);
            }
        }
    }
    return stack.length ? false : true;
}

function solution(s) {
    let answer = 0;
    s = s.split("");
    
    for (let i = 0; i < s.length; i++) {
        if (checkCorrect(s)) {
            answer += 1;
        }
        
        s.push(s.shift());
    }
    
    return answer;
}