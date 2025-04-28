function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let d = 0; // 배달해야 할 남은 박스 수
    let p = 0; // 수거해야 할 남은 박스 수
    
    for (let i = n - 1; i >= 0; i--) {
        d += deliveries[i];
        p += pickups[i];
        
        // 이번 위치에서 배달할 박스나 수거할 박스가 있으면
        while (d > 0 || p > 0) {
            d -= cap;
            p -= cap;
            answer += (i + 1) * 2; // 왕복 거리 추가
        }
    }
    
    return answer;
}
