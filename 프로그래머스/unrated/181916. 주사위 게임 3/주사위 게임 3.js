function solution(a, b, c, d) {
    const diceObj = {};
    for (const item of [a, b, c, d]) {
        diceObj[item] = diceObj[item] ? diceObj[item] + 1 : 1;
    }
    
    let diceKeyCountArray = Object.keys(diceObj);
    const diceValueCountArray = Object.values(diceObj);
    // 케이스 1
    if (diceKeyCountArray.length === 1) return 1111 * diceKeyCountArray[0];
    
    // 케이스 2
    if (diceValueCountArray.includes(3)) {
        const p = +diceKeyCountArray[diceValueCountArray.findIndex(item => item === 3)];
        const q = +diceKeyCountArray[diceValueCountArray.findIndex(item => item !== 3)];
        return (10 * p + q)**2
    }
    
    // 케이스 3
    if (diceKeyCountArray.length === 2) {
        const p = +diceKeyCountArray[0];
        const q = +diceKeyCountArray[1];
        return (p + q) * Math.abs(p - q)
    }
    
    // 케이스 4
    if (diceKeyCountArray.length === 3) {
        let q;
        let r;
        diceValueCountArray.forEach((item, index) => {
            if (item === 1) {
                if (!q) {
                    q = diceKeyCountArray[index];
                }
                r = q ? diceKeyCountArray[index] : r;
                q = q ? q : diceKeyCountArray[index];
            }
        })
        return q * r
    }
    
    // 케이스 5
    if (diceKeyCountArray.length === 4) {
        diceKeyCountArray = diceKeyCountArray.map(Number);
        return diceKeyCountArray.sort()[0]
    }
    
    console.log(diceKeyCountArray)
    console.log(diceValueCountArray)
    

}