function solution(n)
{
    let ans = 0;
    const nToArray = String(n).split("");
    for (const item of nToArray) {
        ans += +item;
    }
    return ans;
}