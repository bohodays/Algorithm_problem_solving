function solution(n, t, m, p) {
    let answer = '';
    const totalNumber = Array(t * m).fill().map((_, index) => index.toString(n).toUpperCase()).join("");
    
    let index = p - 1;
    while (answer.length !== t) {
        answer += totalNumber[index];
        index += m;
    }
    
    return answer;
}