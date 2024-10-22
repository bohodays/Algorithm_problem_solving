function solution(absolutes, signs) {
    const answer = absolutes.map((item, index) => signs[index] ? item : item * -1);
    return answer.reduce((sum, num) => sum + num, 0);
}