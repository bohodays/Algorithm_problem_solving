function solution(dartResult) {
    let answer = [];
    for (const item of dartResult) {
        if (item === "S") {
            continue;
        } else if (item === "D") {
            answer[answer.length - 1] = answer[answer.length - 1]**(2);
        } else if (item === "T") {
            answer[answer.length - 1] = answer[answer.length - 1]**(3);
        } else if (item === "*") {
            answer.forEach((item, index) => {
                if (index === answer.length - 1 || index === answer.length - 2 ) {
                    answer[index] = item * 2;
                }
            });
        } else if (item === "#") {
            answer[answer.length - 1] = answer[answer.length - 1] * (-1);
        } else if (item === "0") {
            if (answer[answer.length - 1] === 1) {
                answer[answer.length - 1] = answer[answer.length - 1] + 9;
            } else {
                answer.push(Number(item));
            }
        }
        else {
            answer.push(Number(item));
        }
    }
    return answer.reduce((sum, num) => sum + num);
}