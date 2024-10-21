function solution(n) {
    var answer = 0;
    return n**(1/2) === parseInt(n**(1/2)) ? (n**(1/2) + 1)**2 : -1;
}