function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (sumValue, count) => {
        if (count === numbers.length) {
            if (sumValue === target) {
                answer++;
            }
            return;
        }
        
        dfs(sumValue + numbers[count], count + 1);
        dfs(sumValue - numbers[count], count + 1);
    }
    
    dfs(0, 0)
    
    return answer;
}