function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (curr, result) => {
        // 종료 조건
        if (curr === numbers.length) {
            if (result === target) answer++;
            
            return;
        }
        
        dfs(curr + 1, result + numbers[curr]);
        dfs(curr + 1, result - numbers[curr]);
    }
    
    dfs(0, 0)
    
    return answer;
}