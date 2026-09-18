function solution(priorities, location) {
    let answer = 1;
    
    priorities = priorities.map((item, index) => [item, index]);
    
    while (true) {
        const [priority, position] = priorities.shift();
        
        // 우선순위가 더 높은 프로세스 여부 확인
        if (priorities.filter((item) => item[0] > priority).length) {
            priorities.push([priority, position]);
        } else {
            // 목표 location인지 확인
            if (position === location) {
                break;
            } else {
                answer++;
            }
        }
    }
    
    return answer;
}