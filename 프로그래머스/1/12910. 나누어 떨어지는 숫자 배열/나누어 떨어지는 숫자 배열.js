function solution(arr, divisor) {
    const answer = [];
    arr.forEach((item) => {
        if (item % divisor === 0) answer.push(item);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}