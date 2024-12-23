function solution(priorities, location) {
    let answer = 0;
    priorities = priorities.map((item, index) => [item, index])

    const queue = [];
    while (priorities.length) {
        const [currentTarget, currentTargetIndex] = priorities.shift();
        const isExistNextTarget = priorities.filter((item) => item[0] > currentTarget).length ? true : false;
        if (isExistNextTarget) {
            priorities.push([currentTarget, currentTargetIndex]);
        } else {
            queue.push([currentTarget, currentTargetIndex])
        }
    }
    
    queue.forEach((item, index) => {
        if (item[1] === location) answer = index + 1;
    })
    
    return answer;
}