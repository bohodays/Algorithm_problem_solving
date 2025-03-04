const getMinServerCount = (userCount, m) => {
    let n = 1;
    while (true) {
        if (userCount >= n * m && userCount < (n + 1) * m) {
            break;
        } else {
            n++;
        }
    }
    return n;
}

function solution(players, m, k) {
    let answer = 0;
    let currentServer = 0;
    
    // 서버 종료시간 체크를 위한 배열
    const serverTable = Array(24).fill(0);
    
    for (let i = 0; i < 24; i++) {
        if (serverTable[i]) {
            currentServer -= serverTable[i];
            currentServer = currentServer < 0 ? 0 : currentServer;
        }
        
        // 이용자가 있으면
        if (players[i] >= m) {
            const requiredServerCount = getMinServerCount(players[i], m);
            
            // 현재 증설된 서버의 수가 부족하면 증설하기
            if (currentServer < requiredServerCount) {
                const addCount = requiredServerCount - currentServer;
                answer += addCount;
                currentServer += addCount;
                
                // 서버 종료시간 입력
                if (i + k < 24) {
                    serverTable[i + k] = addCount;
                }
            }
        }
    }
    
    
    return answer;
}