function solution(numbers) {
    let answer = new Set();
    
    const dfs = (currentArray, startIndex) => {
        if (currentArray.length === 2) {
            answer.add(currentArray.reduce((sum, num) => sum + num, 0));
            return;
        }
        
        for (let i = startIndex; i < numbers.length; i++) {
            dfs([...currentArray, numbers[i]], i + 1);
        }
    }
    
    dfs([], 0);
    
    return [...answer].sort((a, b) => a - b);
}