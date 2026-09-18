function solution(n, t, m, p) {
    let answer = '';
    const totalRef = Array(t * m).fill().map((_, i) => i.toString(n).toUpperCase()).join("");
    
    for (let i = p - 1; i < totalRef.length; i += m) {
        answer += totalRef[i];
        if (answer.length === t) break;
    }
    
    return answer;
}