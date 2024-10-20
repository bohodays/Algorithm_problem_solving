function solution(quiz) {
    const answer = quiz.map((item) => {
        const [calc, result] = item.split(" = ");
        const sign = calc.includes("+") ? 1 : -1;
        const sumValue = calc.includes("+") ? calc.split(" + ") : calc.split(" - ");
        return Number(sumValue[0]) + sign * Number(sumValue[1]) === Number(result) ? "O" : "X";
    });
    return answer;
}