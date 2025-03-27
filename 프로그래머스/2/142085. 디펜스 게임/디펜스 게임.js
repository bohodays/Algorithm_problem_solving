function solution(n, k, enemy) {
    
        // 특정 라운드까지 버틸 수 있는지 확인하는 함수
    function canDefend(n, k, enemy, rounds) {
        let enemies = enemy.slice(0, rounds); // 처음 rounds개의 적 리스트
        enemies.sort((a, b) => b - a); // 내림차순 정렬 (큰 적부터 무적권 사용)

        let total = 0;
        for (let i = k; i < enemies.length; i++) { // 무적권을 사용하지 않은 적 합산
            total += enemies[i];
        }

        return total <= n; // 병사로 버틸 수 있는지 여부 반환
    }

    let left = 0, right = enemy.length;
    
    while (left < right) {
        let mid = Math.ceil((left + right) / 2); // 중간 지점
        if (canDefend(n, k, enemy, mid)) {
            left = mid; // 더 많은 라운드를 버틸 수 있는지 확인
        } else {
            right = mid - 1; // 범위를 줄이기
        }
    }
    
    return left;
}

