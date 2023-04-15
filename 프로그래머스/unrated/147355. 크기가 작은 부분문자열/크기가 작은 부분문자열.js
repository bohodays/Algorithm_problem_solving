function solution(t, p) {
    let answer = 0;
    const testNumberArray = t.split('').map(Number);
    const targetNumber = Number(p);
    for (let i = 0; i <= (t.length - p.length); i++) {
        const checkNumber = Number(testNumberArray.slice(i, i + p.length).join(''));
        if (checkNumber <= targetNumber) {
            answer += 1;
        }
    }
    return answer;
}