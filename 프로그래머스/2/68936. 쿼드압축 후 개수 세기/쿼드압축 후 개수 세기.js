function solution(arr) {
    let zeroCount = 0;
    let oneCount = 0;
    const N = arr.length;
    
    const onDivide = (row, col, limit) => {
        let canDivide = true;
        
        // 영역을 순회하면서 모든 수가 같은지 확인
        for (let i = row; i < row + limit; i++) {
            for (let j = col; j < col + limit; j++) {
                if (arr[row][col] !== arr[i][j]) {
                    canDivide = false;
                    break;
                }
            }
            if (!canDivide) break;
        }
        
        // 만약 영역 내부에 있는 모든 수가 같지 않다면
        if (!canDivide) {
            const halfLimit = parseInt(limit / 2);
            onDivide(row, col, halfLimit);
            onDivide(row, col + halfLimit, halfLimit);
            onDivide(row + halfLimit, col, halfLimit);
            onDivide(row + halfLimit, col + halfLimit, halfLimit);
        } 
        // 그렇지 않다면
        else {
            if (arr[row][col]) oneCount += 1;
            else zeroCount += 1;
        }
    }
    
    onDivide(0, 0, N);
    
    return [ zeroCount, oneCount ];
}