// 올바른 문장인지 확인하는 함수
const checkArray = (arr) => {
    const stack = []
    for (const item of arr) {
        if (!stack.length) stack.push(item);
        else {
            if (item === ")") {
                if (stack[stack.length - 1] === "(") {
                    stack.pop()                    
                }
            } else if (item === "]") {
                if (stack[stack.length - 1] === "[") {
                    stack.pop()
                }
            } else if (item === "}") {
                if (stack[stack.length - 1] === "{") {
                    stack.pop()
                }
            } else {
                stack.push(item)
            }
        }
    }
    if (stack.length) return false;
    return true
}

function solution(s) {
    let answer = 0;
    const sArray = s.split("")
    
    for (let i = 0; i < s.length; i++) {
        const result = checkArray(sArray)
        if (result) answer++;
        sArray.push(sArray.shift())
    }
    
    return answer;
}