function solution(k, m, score) {
    let answer = 0;
    score = score.sort((a, b) => a - b);
    while (score.length >= m) {
        const items = [];
        for (let i = 0; i < m; i++) {
            items.push(score.pop());
        }
        answer += Math.min(...items) * items.length;
    }
    return answer;
}