function solution(n, t, m, p) {
    let answer = '';
    const totalNumber = Array(t * m).fill().map((_, i) => i.toString(n).toUpperCase()).join("");
    
    for (let i = p - 1; i < t * m; i += m) {
        answer += totalNumber[i];
    }
    
    return answer;
}