function solution(age) {
    let answer = '';
    const ref = "abcdefghij";
    age = String(age);
    for (const item of age) {
        answer += ref[Number(item)];
    }
    return answer;
}