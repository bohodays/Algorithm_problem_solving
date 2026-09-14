function solution(n) {
    let answer = 0;
    const nums = Array(n).fill().map((_, i) => i + 1);
    
    
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(nums[i]);
        let sumValue = result.reduce((sum, num) => sum + num, 0);
        
        while (sumValue >= n) {
            if (sumValue === n) answer++;
            result.shift();
            sumValue = result.reduce((sum, num) => sum + num, 0);
        }
    }
    
    return answer;
}