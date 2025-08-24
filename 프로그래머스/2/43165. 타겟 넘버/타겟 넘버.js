function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (sumValue, count) => {
        // 종료 조건
        if (count === numbers.length) {
            if (sumValue === target) answer++;
            return;
        }
        
        dfs(sumValue + numbers[count], count + 1);
        dfs(sumValue - numbers[count], count + 1);
    }
    
    dfs(0, 0)
    
    return answer;
}