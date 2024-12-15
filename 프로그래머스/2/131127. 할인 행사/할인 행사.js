function solution(want, number, discount) {
    let answer = 0;
    const totalCount = number.reduce((sum, num) => sum + num);
    const wantObj = {};
    want.forEach((item, index) => wantObj[item] = number[index]);
    const currentObj = {};
    
    for (let i = 0; i <= discount.length - totalCount; i++) {
        if (!Object.keys(currentObj).length) {
            const targetRangeArray = discount.slice(i, i + totalCount);
            targetRangeArray.forEach((item, index) => currentObj[item] = currentObj[item] ? currentObj[item] + 1 : 1);
        } else {
            const [prevItem, lastItem] = [discount[i - 1], discount[i + totalCount - 1]];
            currentObj[prevItem] = currentObj[prevItem] ? currentObj[prevItem] - 1 : 0;
            currentObj[lastItem] = currentObj[lastItem] ? currentObj[lastItem] + 1 : 1;
        }
        
        // wantObj와 currentObj가 같은지 비교
        let flag = true;
        for (const item of Object.keys(wantObj)) {
            if (wantObj[item] !== currentObj[item]) {
               flag = false;
                break;
            }
        }
        if (flag) answer += 1;
    }
    return answer;
}