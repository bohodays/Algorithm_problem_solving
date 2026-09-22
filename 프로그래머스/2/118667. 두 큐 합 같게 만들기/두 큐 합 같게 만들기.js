function solution(queue1, queue2) {
    let answer = 0;
    const queue = [...queue1, ...queue2];
    const target = queue.reduce((sum, num) => sum + num, 0) / 2;
    let start = 0;
    let end = queue1.length - 1;
    let queue1Total = queue1.reduce((sum, num) => sum + num, 0);
    
    while (start <= end && end < queue.length - 1) {
        
        if (queue1Total < target) {
            end++;
            queue1Total += queue[end];
            answer++;
        } else if (queue1Total > target) {
            queue1Total -= queue[start];
            start++;
            answer++;
        } else {
            return answer;
        }
    }
    
    return -1;
}