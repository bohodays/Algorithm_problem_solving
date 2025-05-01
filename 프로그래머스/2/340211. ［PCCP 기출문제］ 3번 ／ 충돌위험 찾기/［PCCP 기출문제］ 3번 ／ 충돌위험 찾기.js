function solution(points, routes) {
    let answer = 0;
    
    // 시간별 위치 저장을 위한 객체
    const timeRecord = {};
    
    // 시간별 위치를 기록하는 메서드
    const recordPosition = (time, row, col) => {
        const key = `${time}-${row}-${col}`; 
        timeRecord[key] = timeRecord[key] ? timeRecord[key] + 1 : 1;
    }
    
    routes.forEach((route) => {
        let [startRow, startCol] = points[[route[0] - 1]];
        let time = 0;
        recordPosition(time, startRow, startCol); // 시간 지점 기록
        
        for (let i = 1; i < route.length; i++) {
            const [endRow, endCol] = points[[route[i]] - 1];
            const nRow = startRow < endRow ? 1 : -1;
            const nCol = startCol < endCol ? 1 : -1;
            
            // 시간별 row 기록
            while (Math.min(startRow, endRow) < Math.max(startRow, endRow)) {
                time++;
                startRow += nRow;
                recordPosition(time, startRow, startCol);
            }
            
            // 시간별 col 기록
            while (Math.min(startCol, endCol) < Math.max(startCol, endCol)) {
                time++;
                startCol += nCol;
                recordPosition(time, startRow, startCol);
            }
        }
    })
    
    for (const value of Object.values(timeRecord)) {
        if (value >= 2) answer += 1
    }
    
    return answer;
}