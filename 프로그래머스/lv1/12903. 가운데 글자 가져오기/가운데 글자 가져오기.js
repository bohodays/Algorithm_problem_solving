function solution(s) {
    // 홀수이면
    if (s.length % 2) {
        return s[Math.floor(s.length / 2)];
    // 짝수이면
    } else {
        return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
}