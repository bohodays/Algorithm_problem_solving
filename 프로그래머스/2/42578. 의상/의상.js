function solution(clothes) {
    let answer = 1;
    
    const clothesRef = {};
    clothes.forEach(([cloth, type]) => {
        if (clothesRef[type]) clothesRef[type].push(cloth);
        else clothesRef[type] = [cloth];
    })
    
    for (const value of Object.values(clothesRef)) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
}