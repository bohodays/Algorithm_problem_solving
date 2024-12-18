function solution(citations) {
    let answer = 0;
    
    for (let i = 0; i <= Math.max(...citations); i++) {
        // h번 이상 인용된 논문이 h편 이상인지 확인
        const check1 = citations.filter((item) => item >= i).length;
        // h번 이하 인용된 논문이 h편 이하인지 확인
        const check2 = citations.filter((item => item < i)).length;
        if (check1 >= i && check2 <= i) {
            answer = i;
        }
    }
    
    return answer;
}