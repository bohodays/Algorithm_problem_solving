function solution(dirs) {
    let answer = 0;
    const n = 5;
    const d = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    };
    const ref = new Map();
    
    let x = 0;
    let y = 0;
    
    dirs.split("").forEach((dir) => {
        const nx = x + d[dir][0];
        const ny = y + d[dir][1];
        
        // 범위 확인
        if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
            const path1 = `${x}${y}|${nx}${ny}`;
            const path2 = `${nx}${ny}|${x}${y}`;
            if (!ref.has(path1) && !ref.has(path2)) {
                ref.set(path1, true);
                ref.set(path2, true);
                answer++;
            }
            x = nx;
            y = ny;
        }
    })
    
    return answer;
}