function solution(num, k) {
    num = String(num);
    return num.indexOf(String(k)) === -1 ? -1 :  num.indexOf(String(k)) + 1;
}