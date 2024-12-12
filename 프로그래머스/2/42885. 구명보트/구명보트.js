function solution(people, limit) {
    var answer = 0;
    people = people.sort((a, b) => a - b);
    
    // 투포인터 이용
    let [start, end] = [0, people.length - 1];
    while (start <= end) {
        const [minValue, maxValue] = [people[start], people[end]];
        // 두 지점의 합이 limit보다 큰 경우
        if (minValue + maxValue > limit) {
            end--;
        }
        // 두 지점의 합이 limit보다 작거나 같은 경우
        else {
            start++;
            end--;
        }
        answer++;
    }
    
    return answer;
}