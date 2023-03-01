function solution(n) {
    return String(n).split("").map((item) => +item).reverse();
}