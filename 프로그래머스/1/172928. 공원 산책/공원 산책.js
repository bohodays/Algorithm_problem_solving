function solution(park, routes) {
    let [x, y] = [0, 0];
    const directRef = {E: [0, 1], W: [0, -1], N: [-1, 0], S: [1, 0]};
    
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] === "S") [x, y] = [i, j];
        }
    }
    
    routes.forEach((route) => {
        const [pos, range] = route.split(" ");
        let currentPos = [x, y];
        let isChecked = true;
        
        for (let i = 0; i < range; i++) {
            currentPos[0] += directRef[pos][0];
            currentPos[1] += directRef[pos][1];
            
            // 로직 체크
            if (
                0 <= currentPos[0] && currentPos[0] < park.length && 0 <= currentPos[1] && currentPos[1] < park[1].length
            ) {
                if (park[currentPos[0]][currentPos[1]] === "X") {
                    isChecked = false;
                    break;
                }
            } else {
                isChecked = false;
                break;
            }
        }
        
        if (isChecked) [x, y] = currentPos;
    })
    
    return [x, y];
}