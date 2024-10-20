function solution(A, B) {
    let answer = 0;
    A = A.split("");
    for (let i = 0; i < A.length; i++) {
        if (A.join("") === B) {
            return answer;
        }
        A.unshift(A.pop());
        answer++;
    }
    return -1;
}