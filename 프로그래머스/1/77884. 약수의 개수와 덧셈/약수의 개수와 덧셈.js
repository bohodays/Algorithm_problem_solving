function solution(left, right) {
    // 약수의 개수를 구하는 함수
    const getDivisorCount = (n) => {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                result += 1;
            }
        }
        return result % 2 === 0 ? true : false;
    }
    
    let answer = 0;
    for (let i = left; i <= right; i++) {
        const check = getDivisorCount(i);
        if (check) answer += i;
        else answer -= i;
    }
    
    return answer;
}