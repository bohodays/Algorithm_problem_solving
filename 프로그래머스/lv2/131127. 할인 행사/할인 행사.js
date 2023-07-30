function solution(want, number, discount) {
    let answer = 0;
    
    const obj = {};
    
    want.forEach((item) => obj[item] = 0);
    
    for (let i = 0; i < discount.length - 9; i++) {
        const targetItems = discount.slice(i, i + 10);
       
        
        let forFlag = true;
        // want에 있는 물품이 targetItems에 있는지 확인
        for (const item of want) {
            if (!targetItems.includes(item)) {
                forFlag = false;
                break
            }
        }
 
        // 없는 물품이 없다면 개수 파악 수행
        if (forFlag) {
            const copyObj = {...obj};
            
            targetItems.forEach((item) => copyObj[item]++);

            
            let correct = true;
            let i = 0;
            for (const item in copyObj) {
                if (copyObj[item] !== number[i]) {
                    correct = false;
                    break;
                }
                i++;
            }
            
            if (correct) answer++;

        }
        
    }
    
 
    return answer;
}