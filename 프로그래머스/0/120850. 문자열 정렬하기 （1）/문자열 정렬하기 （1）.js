function solution(my_string) {
    var answer = [];
    for (const item of my_string) {
        if (!isNaN(item)) {
            answer.push(item);
        }
    }
    return answer.map((item) => Number(item)).sort();
}