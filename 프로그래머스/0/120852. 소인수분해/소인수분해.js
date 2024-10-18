function solution(n) {
    const answer = new Set();
    let i = 2;
    while (n !== 1) {
        if (n % i === 0) {
            answer.add(i);
            n /= i;
        } else {
            i++;       
        }
    }
    return [...answer];
}