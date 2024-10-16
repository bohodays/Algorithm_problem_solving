function solution(my_string, n) {
    let answer = '';
    for (const item of my_string) {
        answer += item.repeat(n)
    }
    return answer;
}