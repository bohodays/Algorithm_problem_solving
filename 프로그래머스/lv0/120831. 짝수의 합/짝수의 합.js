function solution(n) {
    var answer = 0;
    let i = 2;
    while (i <= n) {
        answer += i;
        i += 2;
    }
    return answer;
}