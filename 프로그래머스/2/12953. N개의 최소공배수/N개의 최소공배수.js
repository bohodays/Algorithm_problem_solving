function solution(arr) {
    let answer = 0;
    const maxValue = Math.max(...arr);
    const n = arr.length;
    
    let curr = 1;
    while (true) {
        let flag = false;
        const check = maxValue * curr;
        for (let i = 0; i < n; i++) {
            if (check % arr[i] !== 0) {
                flag = true;
                break;
            }
        }
        
        if (flag) {
            curr++;
        } else {
            answer = check;
            break;
        }
    }
    
    return answer;
}