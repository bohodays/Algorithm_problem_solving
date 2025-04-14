function solution(r1, r2) {
    let answer = 0;

    for (let x = 1; x <= r2; x++) {
        // 바깥 원의 y 최대값 (포함 포함)
        const maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));

        // 안쪽 원의 y 최소값 (포함 포함)
        // r1보다 작은 부분은 제외해야 하므로 ceil 처리
        const minY = Math.ceil(Math.sqrt(Math.max(0, r1 * r1 - x * x)));

        answer += (maxY - minY + 1);
    }

    // x축과 y축의 양 방향 대칭 고려 (x > 0, y > 0 기준으로 계산했기 때문에)
    return answer * 4;
}
