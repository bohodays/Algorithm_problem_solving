function solution(priorities, location) {
    const ref = [];
    const queue = [];
    priorities.forEach((priority, index) => {
        queue.push([index, priority]);
        ref.push(priority);
    })
    ref.sort();
    
    let count = 1;
    while (true) {
        const [process, priority] = queue[0];
        
        // 가장 높은 우선순위인지 확인
        if (priority === ref[ref.length - 1]) {
            ref.pop();
            // location 대상인지 확인
            if (process === location) return count;
            else {
                count++;
                queue.shift();
            }
        } else {
            queue.push(queue.shift());
        }
    }
    
    return count;
}