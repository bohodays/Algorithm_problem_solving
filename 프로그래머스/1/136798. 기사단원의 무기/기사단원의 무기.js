function solution(number, limit, power) {
    
    const getDivisor = (num, limit, power) => {
        let result = new Set();
        for (let i = 1; i <= num**(0.5); i++) {
            if (num % i === 0) {
                result.add(i);
                result.add(num / i);
            }
            if (result.size > limit) return power;
        }
        return result.size;
    }
    
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        const divisorCount = getDivisor(i, limit, power);
        answer += divisorCount;
        
    }
    return answer;
}