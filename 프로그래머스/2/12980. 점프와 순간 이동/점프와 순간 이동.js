function solution(n)
{
    let ans = 0;
    
    while (n) {
        // 홀수이면
        if (n % 2 === 1) {
            n--;
            ans++;
        }
        // 짝수이면
        else n /= 2;
    }

    return ans;
}