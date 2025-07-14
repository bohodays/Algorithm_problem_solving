function solution(want, number, discount) {
    var answer = 0;
    const wantRef = {};
    want.forEach((item, index) => wantRef[item] = number[index]);
    
    for (let i = 0; i <= discount.length - 10;i++) {
        const discountProducts = discount.slice(i, i + 10);
        
        const tempRef = {};
        discountProducts.forEach((item, index) => tempRef[item] ? tempRef[item] += 1 : tempRef[item] = 1);
        
        const isSame = Object.keys(wantRef).every((key) => wantRef[key] === tempRef[key])
        if (isSame) answer++;
    }
    
    
    return answer;
}