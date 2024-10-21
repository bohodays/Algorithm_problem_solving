function solution(x) {
    var answer = true;
    return x % (String(x).split("").map((item) => Number(item)).reduce((sum, num) => sum + num)) === 0 ? true : false;
}