function solution(n) {
    let answer = 1;
    while (true) {
        console.log(answer, n )
        if ((answer * n) % 6 === 0) {
            return (answer * n) / 6;
        }
        answer++;
    }
}