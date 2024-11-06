function solution(ingredient) {
    let answer = 0;
    let result = [];
    
    for (const item of ingredient) {
        if (result.length < 3) {
            result.push(item);
        } else {
            const stackSize = result.length;
            if (item === 1 && result[stackSize - 3] === 1 && result[stackSize - 2] === 2 && result[stackSize - 1] === 3) {
                answer += 1;
                result.pop();
                result.pop();
                result.pop();
            } else {
                result.push(item);
            }
        }
    }
    
    return answer;
}