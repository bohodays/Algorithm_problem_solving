function solution(nums) {
    
    const isPrimeNumber = (num) => {
        if (num === 1) return false;
        let result = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) result++;
            
            if (result > 2) return false;
        }
        return true;
    }
    
    
    let answer = 0;
    // dfs로 구현
    const combinations = (currentArray, startIndex) => {
        // 종료 조건
        if (currentArray.length === 3) {
            if (isPrimeNumber(currentArray.reduce((sum, num) => sum + num))) {
                answer += 1;
            }
            return;
        }
        
        for (let i = startIndex; i < nums.length; i++) {
            combinations([...currentArray, nums[i]], i + 1);
        }
    }
    
    combinations([], 0);
    
    return answer;
}