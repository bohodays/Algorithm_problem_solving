function solution(arr) {
    let answer = 0;
    let target;
    
    const initValue = Math.max(...arr);
    let mulValue = 1;
    while (true) {
        let flag = true;
        target = initValue * mulValue;
        for (let i = 0; i < arr.length; i++) {
            if (target % arr[i] !== 0) {
                flag = false;
                mulValue++;
                break;
            }
        }
        if (flag) break;
    }
    
    return target;
}