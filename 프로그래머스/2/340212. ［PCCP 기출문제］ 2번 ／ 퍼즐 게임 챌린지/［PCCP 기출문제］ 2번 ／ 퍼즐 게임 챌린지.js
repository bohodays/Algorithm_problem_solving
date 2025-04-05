function solution(diffs, times, limit) {
    let left = 1;
    let right = diffs.reduce((acc,cur) => Math.max(acc, cur),1);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let result = 0;
        let flag = false;
        diffs.forEach((diff, index) => {
            if (diff <= mid) {
                result += times[index];
            } else {
                const count = diff - mid;
                result += (times[index - 1] + times[index]) * count + times[index]
            }
            if (result > limit) {
                flag = true;
                return;
            }
        })
        
        if (flag) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}