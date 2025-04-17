function solution(targets) {
    let answer = 0;
    
    let stack = [];
    let minValue = 0;
    targets = targets.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    })
    
    targets.forEach(([s, e]) => {
        if (!stack.length) {
            stack.push([s, e]);
            minValue = e;
        } else {
            if (s < minValue) {
                stack.push([s, e]);
                minValue = Math.min(minValue, e);
            } else {
                answer += 1;
                stack = [[s, e]];
                minValue = e;
            }
        }
    })
    
    if (stack.length) answer++;
    
    return answer;
}