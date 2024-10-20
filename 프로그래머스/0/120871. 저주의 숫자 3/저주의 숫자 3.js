function solution(n) {
    let answer = 1;
    let currentNum = 1;
    while (currentNum !== n) {
        currentNum++;
        answer++;
        while (answer % 3 === 0 || String(answer).includes("3")) {
            answer += 1;
        }
    }
    return answer;
}

