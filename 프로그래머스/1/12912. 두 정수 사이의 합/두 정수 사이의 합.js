function solution(a, b) {
    const maxValue = Math.max(a, b);
    const minValue = Math.min(a, b);
    let answer = Array(maxValue - minValue + 1).fill(minValue).map((item, index) => item + index).reduce((sum, num) => sum + num, 0);
    return answer;
}