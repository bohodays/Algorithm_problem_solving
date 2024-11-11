function solution(new_id) {
    const ref = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
    
    // 1단계
    new_id = new_id.toLowerCase();
    
    // 2단계
    for (const item of new_id) {
        if (!ref.includes(item)) new_id = new_id.replaceAll(item, "");
    }
    
    // 3단계
    let stack = [];
    for (const item of new_id) {
        if (!stack.length) stack.push(item);
        else {
            if (item === "." && stack[stack.length - 1] === ".") {
                continue;
            } else {
                stack.push(item);
            }
        }
    }
    
    // 4단계
    if (stack[0] === ".") stack.splice(0, 1);
    if (stack[stack.length - 1] === ".") stack.splice(stack.length - 1, 1);
    
    // 5단계
    if (!stack.length) stack.push("a");
    
    // 6단계
    if (stack.length >= 16) stack = stack.slice(0, 15);
    if (stack[stack.length - 1] === ".") stack.splice(stack.length - 1, 1);
    
    // 7단계
    if (stack.length <= 2) {
        while (stack.length < 3) {
            stack.push(stack[stack.length - 1]);
        }
    }
    
    return stack.join("");
}