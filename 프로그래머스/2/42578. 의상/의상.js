function solution(clothes) {
    let answer = 1;
    
    const clothesMap = new Map();
    clothes.forEach((cloth) => {
        const [name, category] = cloth;
        if (clothesMap.has(category)) {
            clothesMap.set(category, [...clothesMap.get(category), name])
        } else {
            clothesMap.set(category, [name])
        }
    })
    
    for (const [key, value] of clothesMap) {
        answer *= value.length + 1;
    }
    
    return answer - 1;
}