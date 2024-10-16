function solution(n) {
    return [...String(n)].map((item) => Number(item)).reduce((sum, num) => sum + num);
}