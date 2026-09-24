function solution(arr) {
    const answer = [];
    const queue = [[0, 0, arr.length]];
    let oneCount = 0;
    let zeroCount = 0;
    
    while (queue.length) {
        const [x, y, n] = queue.shift();
        
        // 해당 영역의 모든 수가 같은 값인지 확인
        const target = arr[x][y];
        let canDivide = false;
        for (let i = x; i < x + n; i++) {
            let flag = false;
            for (let j = y; j < y + n; j++) {
                if (arr[i][j] !== target) {
                    canDivide = true;
                    flag = true;
                    break;
                }
            }
            if (flag) break;
        }
        
        // 모든 수가 같지 않으면 영역 쪼개기
        if (canDivide) {
            const dividedN = n / 2;
            if (dividedN !== 1) {
                queue.push([x, y, dividedN]);
                queue.push([x + dividedN, y, dividedN]);
                queue.push([x, y + dividedN, dividedN]);
                queue.push([x + dividedN, y + dividedN, dividedN]);
            }
        } else {
        // 모든 수가 같다면 count 및 영역 초기화
            if (target === 0) zeroCount++;
            else oneCount++;
            
            for (let i = x; i < x + n; i++) {
                for (let j = y; j < y + n; j++) {
                    arr[i][j] = Infinity;
                }
            }
        }
    }
    
    arr.forEach((row) => {
        zeroCount += row.filter((num) => num === 0).length;
        oneCount += row.filter((num) => num === 1).length;
    })
    
    return [zeroCount, oneCount];
}