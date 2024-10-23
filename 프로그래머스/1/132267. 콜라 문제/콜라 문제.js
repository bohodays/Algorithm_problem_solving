function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        const getCoke = parseInt(n / a) * b;
        answer += getCoke;
        n = (n % a) + getCoke;
    }
    
    return answer;
}