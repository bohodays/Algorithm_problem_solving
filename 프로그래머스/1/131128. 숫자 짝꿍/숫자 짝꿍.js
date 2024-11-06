function solution(X, Y) {
    let answer = "";
    X = X.split("");
    Y = Y.split("");
    const ref = {};
    X.forEach((item) => ref[item] ? ref[item]++ : ref[item] = 1);
    
    Y.forEach((item) => {
        if (ref[item] && ref[item] > 0) {
            ref[item] -= 1;
            answer += item;
        }
    })
    
    if (answer.length === 0) return "-1";
    else if (Number(answer) === 0) return "0";
    return answer.split("").sort((a, b) => b - a).join("");
}