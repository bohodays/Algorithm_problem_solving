function solution(number, k) {
    const stack = [];
    let count = k;
    
    for (let num of number) {
        num = Number(num);
        while (count > 0 && stack.length && stack[stack.length - 1] < num) {
            count--;
            stack.pop();
        }        
        stack.push(num);
    }
    
    return stack.join("").slice(0, number.length - k);
}