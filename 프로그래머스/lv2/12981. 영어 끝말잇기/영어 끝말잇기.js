function solution(n, words) {
    const answer = [];
    const checkList = {};
    let lastItem = words[0];
    
    for (let i = 0; i < words.length; i++) {
        const turn = i % n;
        const checkItem = words[i];
        
        // 규칙 3번 검사
        if (i !== 0) {
            if (lastItem[lastItem.length - 1] !== checkItem[0]) {
                answer.push(turn + 1, Math.ceil((i+1) / n));
                return answer;
            } else {
                lastItem = checkItem;
            }
        }
        
        // 규칙 5번 검사
        if (checkItem.length === 1) {
            answer.push(turn + 1, Math.ceil((i+1) / n));
            return answer;
        }
        
        // 규칙 4번 검사
        for (const key in checkList) {
            if (checkList[key].includes(checkItem)) {
                answer.push(turn + 1, Math.ceil((i+1) / n))
                return answer;
            }
        }
        
        // 규칙에 걸리지 않았다면 객체에 추가
        if (checkList[turn]) {
            checkList[turn].push(checkItem)
        } else {
            checkList[turn] = [checkItem];
        }       
    }
    
    return [0, 0]

    
    
}