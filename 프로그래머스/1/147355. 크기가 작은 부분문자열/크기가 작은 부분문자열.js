function solution(t, p) {
    let answer = 0;
    const result = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const num = Number(t.slice(i, i + p.length));
        if (num <= Number(p)) answer += 1;
    }
    return answer;
}