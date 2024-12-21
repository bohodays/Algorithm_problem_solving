function solution(clothes) {
    let answer = 1;
    const clothesObj = {};
    
    for (const item of clothes) {
        if (clothesObj[item[1]]) clothesObj[item[1]].push(item[0])
        else {
            clothesObj[item[1]] = [item[0]];
        }
    }
    
    for (const item of Object.keys(clothesObj)) {
        answer *= (clothesObj[item].length + 1)
    }
    
    return answer - 1;
}