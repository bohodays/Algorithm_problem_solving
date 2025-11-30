function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (currentNumber, count) => {
        
        if (count === numbers.length) {
            if (currentNumber === target) answer++;
            return;
        }
        
        dfs(currentNumber + numbers[count], count + 1);
        dfs(currentNumber - numbers[count], count + 1);
    }
    
    dfs(0, 0);
    
    return answer;
}