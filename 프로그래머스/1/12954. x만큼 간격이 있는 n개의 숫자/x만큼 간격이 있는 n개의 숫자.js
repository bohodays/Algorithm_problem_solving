function solution(x, n) {
    return Array(n).fill(x).map((item, index) => item * (index + 1));
}