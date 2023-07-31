function solution(clothes) {
    let answer = 1;
    
    const obj = {};
    
    for (const item of clothes) {
        if (obj[item[1]]) obj[item[1]].push(item[0]);
        else obj[item[1]] = [item[0]];
    }
    
    Object.values(obj).forEach((item) => {
        answer *= (item.length + 1)
    })
    
    return answer - 1;
}