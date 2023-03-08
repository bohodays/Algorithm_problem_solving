function solution(x) {
    const sumValue = String(x).split("").map((item) => +item).reduce((sum, num) => sum + num);
    if (x % sumValue === 0) {
        return true;
    } else {
        return false;
    }
}