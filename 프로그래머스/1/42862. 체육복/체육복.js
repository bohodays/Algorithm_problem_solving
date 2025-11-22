function solution(n, lost, reserve) {
    let answer = 0;
    const clothCount = {};
    const nArray = Array(n).fill().map((_, i) => i + 1);
    
    nArray.forEach((num) => {
        if (lost.includes(num) && reserve.includes(num)) clothCount[num] = 1;
        else if (lost.includes(num)) clothCount[num] = 0;
        else if (reserve.includes(num)) clothCount[num] = 2;
        else clothCount[num] = 1;
    })
    
    nArray.forEach((num) => {
        if (clothCount[num] === 0) {
            if (clothCount[num - 1] && clothCount[num - 1] > 1) {
                clothCount[num - 1] -= 1;
                clothCount[num] = 1;
            } else if (clothCount[num + 1] && clothCount[num + 1] > 1) {
                clothCount[num + 1] -= 1;
                clothCount[num] = 1;
            }
        }
    })
    
    answer += Object.values(clothCount).filter((num) => num >= 1).length;
    
    return answer;
}