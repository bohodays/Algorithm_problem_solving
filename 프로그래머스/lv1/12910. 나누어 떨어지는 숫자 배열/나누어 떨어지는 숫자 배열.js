function solution(arr, divisor) {
    var answer = [];
    for (const item of arr) {
        if (item % divisor === 0) {
            answer.push(item)
        }
    }
    return answer.length ? answer.sort((a,b) => a - b) : [-1];
}