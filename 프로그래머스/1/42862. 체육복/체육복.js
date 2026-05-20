function solution(n, lost, reserve) {
    const checkArray = Array(n).fill(1);
    lost.forEach((num) => checkArray[num - 1]--);
    reserve.forEach((num) => checkArray[num - 1]++);
    
    checkArray.forEach((num, i) => {
        if (checkArray[i] === 0) {
            // 앞번호 확인
            if (i !== 0 && checkArray[i - 1] === 2) {
                checkArray[i - 1]--;
                checkArray[i]++;
            } else if (i !== n - 1 && checkArray[i + 1] === 2) {
                checkArray[i + 1]--;
                checkArray[i]++;
            }
        }
    })

    return checkArray.filter((num) => num !== 0).length;
}