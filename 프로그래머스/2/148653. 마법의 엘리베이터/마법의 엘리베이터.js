function solution(storey) {
    const digits = String(storey).split("").reverse().map(Number);
    digits.push(0); // 최상위 자리 캐리 처리를 위한 padding

    let c0 = 0;        // 현재까지 처리 후 carry=0 인 경우의 최소 비용
    let c1 = Infinity; // 현재까지 처리 후 carry=1 인 경우의 최소 비용

    for (const d of digits) {
        // carry_in=0 이었던 경우: value = d
        // carry_in=1 이었던 경우: value = d + 1
        const newC0 = Math.min(
            c0 + d,             // carry_in 0 → 내려가기
            c1 + (d + 1)        // carry_in 1 → 내려가기
        );
        const newC1 = Math.min(
            c0 + (10 - d),          // carry_in 0 → 올려서 캐리
            c1 + (10 - (d + 1))     // carry_in 1 → 올려서 캐리
        );

        c0 = newC0;
        c1 = newC1;
    }

    return c0; // 맨 위 padding까지 처리했으므로 carry는 0으로 끝나야 함
}