function solution(priorities, location) {
    let answer = 1;
    
    priorities = priorities.map((item, index) => [item, index]);
    
    while (true) {
        const currentItem = priorities.shift();
        const priorityCheck = priorities.some((item) => item[0] > currentItem[0]);
        
        if (priorityCheck) {
            priorities.push(currentItem);
        } else {
            if (currentItem[1] === location) {
                return answer;
            } else {
                answer++;
            }
        }
    }
    
    return answer;
}