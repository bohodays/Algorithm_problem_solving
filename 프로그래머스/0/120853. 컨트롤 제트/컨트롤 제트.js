function solution(s) {
    const answer = [];
    const sArray = s.split(" ");
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === "Z") {
            answer.pop();
        } else {
            answer.push(Number(sArray[i]));
        }
    }
    return answer.reduce((sum, num) => sum + num, 0);
}