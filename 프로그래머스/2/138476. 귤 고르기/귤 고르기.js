function solution(k, tangerine) {
    let answer = 0;
    const itemObj = {};
    
    for (const item of tangerine) {
        itemObj[item] = itemObj[item] ? itemObj[item] + 1 : 1;
    }
    
    const setTangerine = [...new Set(tangerine)]
    
    const sortedArray = setTangerine.sort((a, b) => itemObj[b] - itemObj[a])
    
    // console.log(sortedArray, itemObj)
    for (const item of sortedArray) {
        answer++;
        k -= itemObj[item]
        
        if (k <= 0) return answer
    }
    
    return answer;
}