function solution(clothes) {
    let answer = 1;
    const clothesRef = {};
    clothes.forEach(([cloth, type]) => {
        clothesRef[type] = (clothesRef[type] || 0) + 1;
    });
    
    // 각 유형별 개수 + 1 곱하기
    for (const type in clothesRef) {
        answer *= clothesRef[type] + 1;
    }
    
    // 모두 선택하지 않는 케이스 제외
    return answer - 1;
}