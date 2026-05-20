function solution(number, k) {
    let answer = [];
    
    for (const num of number) {
        if (!answer.length) {
            answer.push(num);
        } else {
            while (k > 0 && answer[answer.length - 1] < num) {
                answer.pop();
                k--;
            }
            answer.push(num);
        }
    }
    
    return answer.slice(0, number.length - k).join("");
}