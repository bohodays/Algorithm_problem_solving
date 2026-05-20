function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (num, count) => {
        // 종료조건
        if (count === numbers.length) {
            if (num === target) answer++;
            
            return;
        }
        
        dfs(num + numbers[count], count + 1);
        dfs(num - numbers[count], count + 1);
    }
    
    dfs(0, 0);
    
    return answer;
}