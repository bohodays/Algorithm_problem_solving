function solution(expression) {
    let answer = 0;
    const allExpressions = []
    const onlyOperations = []
    const onlyNumbers = []
    
    let tmp = ""
    for (const item of expression) {
        if (item === "+" || item === "-" || item === "*") {
            onlyNumbers.push(+tmp);
            onlyOperations.push(item);
            allExpressions.push(+tmp);
            allExpressions.push(item);
            tmp = ""
        } else {
            tmp += item;
        }
    }
    
    if (tmp) {
        onlyNumbers.push(+tmp);
        allExpressions.push(+tmp);
    };
    
    const result = [...new Set([...onlyOperations])];
    
    // dfs로 우선순위 순열 구하기
    const visited = Array(result.length).fill(false);
    const rankArray = [];
    const dfs = (arr) => {
        // 종료조건
        if (arr.length === result.length) {
            rankArray.push([...arr]);
            return;
        }
        
        for (let i = 0; i < result.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                arr.push(result[i]);
                dfs(arr)
                // 백트래킹
                arr.pop();
                visited[i] = false;
            }
        }
    }
    dfs([])
    
    const computedNumbers = (numberArray, operatorArray, keyOperator) => {
        const newNumberArray = [numberArray.shift()];
        const newOperatorArray = [];
        
        for (let i = 0; i < numberArray.length; i++) {
            if (operatorArray[i] === keyOperator) {
                if (keyOperator === "*") {
                    newNumberArray[newNumberArray.length - 1] *= numberArray[i];
                } else if (keyOperator === "+") {
                    newNumberArray[newNumberArray.length - 1] += numberArray[i];
                } else {
                    newNumberArray[newNumberArray.length - 1] -= numberArray[i];
                }
            } else {
                newNumberArray.push(numberArray[i]);
                newOperatorArray.push(operatorArray[i]);
            }
        }
        
        return [newNumberArray, newOperatorArray]
    }
    
    
    // rankArray 기준으로 최대값 구하기
    for (const rank of rankArray) {

        let tempNumbers = [...onlyNumbers];
        let tempOperator = [...onlyOperations];

        rank.forEach((currRank) => {
            [tempNumbers, tempOperator] = computedNumbers(tempNumbers, tempOperator, currRank);         
        })
        answer = Math.max(answer, Math.abs(tempNumbers[0]));
    }

    return answer;
}