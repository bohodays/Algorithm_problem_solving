function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const partialArr = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let result = 0;
            for (let k = 0; k < arr2.length; k++) {
                result += arr1[i][k] * arr2[k][j]
            }
            partialArr.push(result);
        }
        answer.push(partialArr)
    }
    
    return answer;
}


// 2 3 2   5 4 3
// 4 2 4   2 4 1
// 3 1 4   3 1 1

