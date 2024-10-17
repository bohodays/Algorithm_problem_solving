function solution(my_string) {
    const answer = [];
    for (const item of my_string) {
        if (!answer.includes(item)) {
            answer.push(item)
        }
    }
    return answer.join("");
}