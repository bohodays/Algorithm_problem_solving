function solution(s) {
    let answer = "";
    let refValues = s.split("");
    for (const item of s) {
        const check = refValues.filter((v) => v === item).length;
        if (check === 1) answer += item;
    }
    return answer.split("").sort().join("");
}