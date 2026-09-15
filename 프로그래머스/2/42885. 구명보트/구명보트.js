function solution(people, limit) {
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    people = people.sort((a, b) => a - b);
    
    while (left <= right) {
        const curr = people[left] + people[right];
        if (curr > limit) right--;
        else if (curr <= limit) {
            right--;
            left++;  
        }
        
        answer++;
    }
    
    return answer;
}