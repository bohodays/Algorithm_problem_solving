function solution(citations) {
    const count = Math.max(...citations);
    const target = citations.length;
    let answer = 0;
    
    for (let i = 0; i <= count; i++) {
        const moreThan = citations.filter((item) => item >= i).length;
        
        // h번 이상 인용된 논문이 h편 이상인가?
        if (moreThan < i) continue;
        
        const lessThan = citations.filter((item) => item < i);
        
        if (moreThan + lessThan.length !== target) continue;
        
        answer = i;
        

    }

    
    return answer;
}