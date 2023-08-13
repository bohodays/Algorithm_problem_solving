function solution(numbers, target) {
    let answer = 0;
    const limit = numbers.length;

    const dfs = (length, sum) => {
        // 종료 조건
        if (length === limit) {
            if (sum === target) {
                answer++;
            }
            return;
        } else {
            dfs(length + 1, sum + numbers[length]);
            dfs(length + 1, sum - numbers[length]);
        }
    }
    
    dfs(0, 0);
    return answer;
}