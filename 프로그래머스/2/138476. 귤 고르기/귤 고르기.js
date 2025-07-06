function solution(k, tangerine) {
    let answer = 0;
    
    // Map에 크기별 귤의 개수 저장
    const countMap = new Map();
    tangerine.forEach((item) => {
        const currentItem = countMap.get(item);
        if (currentItem) {
            countMap.set(item, currentItem + 1);
        } else {
            countMap.set(item, 1)
        }
    })
    
    const countArray = [...countMap.values()].sort((a, b) => b - a)
    for (let i = 0; i < countArray.length; i++) {
        answer += 1;
        k -= countArray[i];
        
        if (k <= 0) return answer;
    }

    return answer;
}