function solution(numbers) {
    let ans = 45;
    for (const number of numbers) {
        ans -= number;
    }
    return ans;
}