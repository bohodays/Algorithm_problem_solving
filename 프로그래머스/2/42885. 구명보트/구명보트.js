function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    
    let start = 0;
    let end = people.length - 1;
    while (start <= end) {
        const startPoint = people[start];
        const endPoint = people[end];
        if (startPoint + endPoint > limit) {
            end--;
        } else {
            start++;
            end--;
        }
        answer++;
    }
    
    return answer;
}