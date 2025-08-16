function solution(priorities, location) {
    let answer = 0;
    
    priorities = priorities.map((item, index) => ([item, index]))
    
    while (true) {
        const [currentItem, currentIndex] = priorities.shift();
        
        const check = priorities.filter((item) => item[0] > currentItem).length;
        
        if (check) {
            priorities.push([currentItem, currentIndex])
        } else {
            if (currentIndex === location) {
                return answer + 1;
            } else {
                answer++;
            }
        }
    }

    
    return answer;
}
