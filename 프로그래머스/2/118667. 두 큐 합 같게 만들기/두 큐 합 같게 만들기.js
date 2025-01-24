function solution(queue1, queue2) {
    let count = 0;
    
    const totalQueue = [...queue1, ...queue2];
    const targetSumValue = totalQueue.reduce((sum, num) => sum + num, 0) / 2;
    
    // two point 이용
    let start = 0;
    let end = queue1.length - 1;
    let initSumValue = queue1.reduce((sum, num) => sum + num, 0);
    
    while (start <= end && end < totalQueue.length - 1) {
        if (initSumValue < targetSumValue) {
            end++;
            initSumValue += totalQueue[end];
            count++;
        } else if (initSumValue > targetSumValue) {
            initSumValue -= totalQueue[start];
            start++;
            count++;
        } else {
            return count;
        }
    }
    
    return -1;
}