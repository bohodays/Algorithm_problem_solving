function solution(info, n, m) {
    const itemCount = info.length; // 총 물건 개수
    const MAX = Infinity;          // 초기 최소값 비교용 무한값

    // dp[i][j] = i개의 물건을 훔쳤고, B의 흔적 총합이 j일 때 A의 최소 흔적 합
    const dp = Array.from({ length: itemCount + 1 }, () => Array(m).fill(MAX));
    dp[0][0] = 0; // 초기 상태: 아무것도 훔치지 않았고, A, B 흔적 모두 0일 때 → 최소 A 흔적은 0

        // i번째 물건을 처리
    for (let i = 0; i < itemCount; i++) {
        const [aTrace, bTrace] = info[i]; // i번째 물건을 A가 훔칠 때와 B가 훔칠 때의 흔적
        // B가 현재까지 남긴 흔적 합 b
        for (let b = 0; b < m; b++) {
            if (dp[i][b] === MAX) continue; // 이전 상태가 불가능한 경우는 스킵
            
            // [1] A가 i번째 물건을 훔친다 → A의 흔적이 aTrace 증가, B는 그대로
            // 다음 상태 (i+1, b)의 A 흔적합은 dp[i][b] + aTrace
            if (dp[i + 1][b] > dp[i][b] + aTrace) {
                dp[i + 1][b] = dp[i][b] + aTrace;
            }

                        // [2] B가 i번째 물건을 훔친다 → B의 흔적이 bTrace 증가
            const nextB = b + bTrace;

            // B의 흔적 총합이 m 이상이면 경찰에 잡히므로 불가능
            if (nextB < m) {
                // 다음 상태 (i+1, nextB)에서는 A의 흔적은 증가하지 않음 (그대로 유지)
                if (dp[i + 1][nextB] > dp[i][b]) {
                    dp[i + 1][nextB] = dp[i][b];
                }
            }
        }
    }

        // 마지막 물건까지 다 처리했을 때, A의 누적 흔적합이 n 이상이면 안 됨
    let result = MAX;

    // 가능한 B 흔적 총합 중에서, A 흔적이 n 미만인 최소값을 찾는다
    for (let b = 0; b < m; b++) {
        if (dp[itemCount][b] < n) {
            result = Math.min(result, dp[itemCount][b]);
        }
    }
    // 조건을 만족하는 경우가 없으면 -1 반환
    return result === MAX ? -1 : result;
}
