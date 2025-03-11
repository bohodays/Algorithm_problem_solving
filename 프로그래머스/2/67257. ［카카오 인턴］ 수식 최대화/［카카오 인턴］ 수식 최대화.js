function solution(expression) {
    let answer = 0;
    const numbers = [];
    const operator = [];
    let uniqueOperator;
    
    // 사용된 숫자와 연산자 분리
    let temp = "";
    for (let i = 0; i < expression.length; i++) {
        const currItem = expression[i];
        if (isNaN(currItem)) {
            numbers.push(+temp);
            operator.push(currItem)
            temp = "";
        } else {
            temp += currItem;
        }
    }
    if (temp) numbers.push(+temp);
    
    uniqueOperator = [...new Set(operator)]

    // 사용된 연산자들의 순열 구하기
    const visited = Array(uniqueOperator.length).fill(false);
    const computedOperators = [];
    const dfs = (result) => {
        // 종료조건
        if (result.length === uniqueOperator.length) {
            computedOperators.push([...result]);
            return;
        }
        
        for (let i = 0; i < uniqueOperator.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                result.push(uniqueOperator[i]);
                dfs(result);
                // 백트래킹
                result.pop();
                visited[i] = false;
            }
        }
    }
    dfs([]);
    
    // 우선 순위 연산자를 대상으로 수식 계산하기
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
    
    
    for (let i = 0; i < computedOperators.length; i++) {
        const currentRank = computedOperators[i];
        let tempNumbers = [...numbers];
        let tempOperator = [...operator];
        
        for (let j = 0; j < currentRank.length; j++) {
            [tempNumbers, tempOperator] = computedNumbers(tempNumbers, tempOperator, currentRank[j]);
            
        }
        answer = Math.max(answer, Math.abs(tempNumbers[0]));
    }
    
    return answer;
}