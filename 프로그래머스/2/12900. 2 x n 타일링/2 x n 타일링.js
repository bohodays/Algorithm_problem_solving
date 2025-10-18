function solution(n) {
    const answer = [0, 1, 2];
    
    if (n <= 2) return answer[n];
    
    while (answer.length <= n) {
        const lastIndex = answer.length;
        answer.push((answer[lastIndex - 1] % 1000000007) + (answer[lastIndex - 2] % 1000000007));
    }
    
    return answer[n] % 1000000007;
}