// 최대공약수 구하기
const gcd = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

// 최소공배수 구하기
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}


function solution(arr) {
    const answer = arr.reduce((result, num) => lcm(result, num), 1);
    return answer;
}