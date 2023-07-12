const checkItem = (arr) => {
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!stack.length) stack.push(arr[i]);
        else {
            if (stack[stack.length - 1] === '[' && arr[i] === ']') {
                stack.pop();
            } else if (stack[stack.length - 1] === '(' && arr[i] === ')') {
                stack.pop();
            } else if (stack[stack.length - 1] === '{' && arr[i] === '}') {
                stack.pop();
            } else {
                stack.push(arr[i])
            }
        }
    }
    
    return stack.length ? false : true;
}

function solution(s) {
    s = s.split("");
    let rotationCount = 0;
    let ans = 0;
    
    while (rotationCount !== s.length) {
        const result = checkItem(s);
        if (result) ans++;
        
        s.push(s.shift());
        rotationCount++;
    }
    
    return ans;
}