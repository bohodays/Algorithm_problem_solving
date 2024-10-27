function solution(n) {
    const primeNumbers = Array(n + 1).fill(false);
    
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (!primeNumbers[i]) {
            answer++;
            let multipleNumber = 2;
            while (i * multipleNumber <= n) {
                primeNumbers[i * multipleNumber] = true;
                multipleNumber++;
            }
        }
    }
    
    
    return answer;
}