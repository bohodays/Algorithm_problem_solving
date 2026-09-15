function solution(n, words) {
    var answer = [];
    const ref = new Map();
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
        count = i;
        const curr = words[i];
        // 3번 체크
        if (i !== 0) {
            const prev = words[i - 1];
            if (prev[prev.length - 1] !== curr[0]) {
                break;
            }
        }
        
        // 4번 체크
        if (ref.has(curr)) break;
        
        ref.set(curr, true);
    }
    
    return ref.size === words.length ? [0, 0] : [(count % n) + 1, parseInt(count / n) + 1];
}