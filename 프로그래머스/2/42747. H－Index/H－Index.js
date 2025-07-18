function solution(citations) {
    let answer = 0;
    const n = Math.max(...citations);
    
    for (let i = 0; i <= n; i++) {
        // h번 이상 인용된 논문이 h편 이상인지 확인
        const check1 = citations.filter((item) => item >= i).length >= i;
        // 나머지 논문이 h번 이하 인용되었는지 확인
        const check2 = citations.filter((item) => item < i).length <= i;
        
        if (check1 && check2) answer = i;
    }
    
    return answer;
}