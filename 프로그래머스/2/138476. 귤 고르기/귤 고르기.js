function solution(k, tangerine) {
    var answer = 0;
    
    const countObj = {};
    tangerine.forEach((item) => {
        if (item in countObj) {
            countObj[item] += 1;
        } else {
            countObj[item] = 1;
        }
    })
    
    const countArray = Object.entries(countObj).sort((a, b) => b[1] - a[1]);
    for (const item of countArray) {
        k -= item[1];
        answer++;
        if (k <= 0) {
            break;
        }
    }
    
    return answer;
}