function solution(left, right) {
    // 약수를 구하는 함수
    const getDivisorsCount = (number) => {
        let count = 0;
        for (i = 1; i <= Math.sqrt(number); i++) {
            if (i**2 === number) {
                count += 1;
            } else if (number % i === 0) {
                count += 2;
            }
        }
        return count;
    }
    
    let ans = 0;
    for (let i = left; i <= right; i++) {
        const target = getDivisorsCount(i);
        // 홀수이면 빼기
        if (target % 2) {
            ans -= i;
        // 짝수이면 더하기
        } else {
            ans += i;
        }
    }
    return ans;
}