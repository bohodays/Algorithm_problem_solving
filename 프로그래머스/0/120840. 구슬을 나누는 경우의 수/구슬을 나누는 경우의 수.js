const multipleFunc = (number) => {
    let answer = BigInt(1);
    for (let i = number; i >= 1; i--) {
        answer *= BigInt(i);
    }
    return answer;
}

function solution(balls, share) {
    const answer = multipleFunc(balls) / (multipleFunc(balls - share) * multipleFunc(share));
    return answer;
}
