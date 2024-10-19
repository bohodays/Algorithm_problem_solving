function solution(numbers, k) {
    let answer = 0;
    let target = 0;
    while (k) {
        answer = numbers[(target % numbers.length)]
        target += 2;
        k--;
    }
    return answer;
}