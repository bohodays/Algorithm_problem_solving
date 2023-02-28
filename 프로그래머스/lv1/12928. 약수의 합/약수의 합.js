function solution(n) {
    let ans = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (i**2 === n) {
            ans += i
        } else if (n % i === 0) [
            ans += i + (n / i)
        ]
    }
    return ans
}