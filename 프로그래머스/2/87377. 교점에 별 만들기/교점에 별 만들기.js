function solution(line) {
    const points = [];

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    // 교점 찾기
    for (let i = 0; i < line.length - 1; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];
            const denominator = A * D - B * C;

            if (denominator === 0) continue; // 평행 or 일치

            const x = (B * F - E * D) / denominator;
            const y = (E * C - A * F) / denominator;

            // 정수 좌표인지 확인
            if (Number.isInteger(x) && Number.isInteger(y)) {
                points.push([x, y]);
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
    }

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    // 2D 배열 만들고 전부 .으로 초기화
    const board = Array.from({ length: height }, () => Array(width).fill('.'));

    // 별 찍기
    for (const [x, y] of points) {
        const row = maxY - y;      // 위에서부터 아래로
        const col = x - minX;      // 왼쪽부터 오른쪽으로
        board[row][col] = '*';
    }

    return board.map(row => row.join(''));
}
