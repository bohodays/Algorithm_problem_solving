function solution(number) {
    let answer = 0;
    
    // 조합 구현 (dfs 방식)
    const combinations = (currentArray, startIndex) => {
        // 종료 조건
        if (currentArray.length === 3) {
            answer += currentArray.reduce((sum, num) => sum + num, 0) === 0 ? 1 : 0;
            return;
        }
        
        for (let i = startIndex; i < number.length; i++) {
            combinations([...currentArray, number[i]], i + 1);
        }
    }

    combinations([], 0);
    
    return answer;
}