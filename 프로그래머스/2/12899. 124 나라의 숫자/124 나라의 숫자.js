function solution(n) {
    const numbers = ["1", "2", "4"];
    
    let answer = "";
    while (n > 3) {
        answer += numbers[parseInt((n - 1) % 3)];
        n = parseInt((n - 1) / 3);
    }
    
    answer += numbers[n - 1]
    
    return answer.split("").reverse().join("");
}
