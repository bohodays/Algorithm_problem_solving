function solution(n) {
    if (n < 4) return 0;
    
    let answer = 0;
    for (let i = 4; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count >= 3) answer += 1;
    }
    return answer;
}