function solution(citations) {
    let answer = 0;
    
    for (let h = 0; h <= Math.max(...citations); h++) {
        // h번 이상 인용된 논문이 h편 이상인지 확인
        if (citations.filter((citation) => citation >= h).length >= h) {
            // 나머지 논문이 h번 이하 인용되었는지 확인
            if (citations.filter((citation) => citation < h).length <= h) {
                answer = h;
            }
        }
    }
    
    return answer;
}