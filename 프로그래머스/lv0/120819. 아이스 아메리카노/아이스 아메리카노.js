function solution(money) {
    const answer = [];
    answer.push(parseInt(money / 5500))
    answer.push(money % 5500)
    return answer;
}