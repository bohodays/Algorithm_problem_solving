function solution(people, limit) {
    let answer = 0;
    let start = 0
    let end = people.length - 1;
    
    people.sort((a, b) => a - b);
    while (start <= end) {
        const first = people[start];
        const second = people[end];
        
        if (first + second > limit) end--;
        else {
            start++;
            end--;
        };
        
        answer++;
    }
    return answer;
}