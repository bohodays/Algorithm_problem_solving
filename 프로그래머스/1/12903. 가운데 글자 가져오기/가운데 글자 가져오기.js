function solution(s) {
    return s.length % 2 === 1 ? s[parseInt(s.length / 2)] : s.slice(parseInt(s.length / 2) - 1, parseInt(s.length / 2) + 1);
}