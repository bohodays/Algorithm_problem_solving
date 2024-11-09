function solution(numbers, hand) {
    
    const findPosition = (target) => {
        const keypads = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (keypads[i][j] === target) {
                    return [i, j];
                }
            }
        }
    }
    
    let answer = '';
    const position = {
        L: "*",
        R: "#"
    };
    for (const number of numbers) {
        if (number === 1 || number === 4 || number === 7) {
            answer += "L";
            position.L = number;
        } else if (number === 3 || number === 6 || number === 9) {
            answer += "R";
            position.R = number;
        } else {
            // 거리가 더 가까운 엄지손가락 구하기
            const [currLeftX, currLeftY] = findPosition(position.L);
            const [currRightX, currRightY] = findPosition(position.R);
            const [targetX, targetY] = findPosition(number);
            
            // 거리 구하기
            const leftToTarget = Math.abs(currLeftX - targetX) + Math.abs(currLeftY - targetY);
            const rightToTarget = Math.abs(currRightX - targetX) + Math.abs(currRightY - targetY);
            
            if (leftToTarget < rightToTarget) {
                answer += "L";
                position.L = number;
            } else if (leftToTarget > rightToTarget) {
                answer += "R";
                position.R = number;
            } else {
                hand === "right" ? (position.R = number, answer += "R") : (position.L = number, answer += "L");
            }
        }
    }
    
    return answer;
}