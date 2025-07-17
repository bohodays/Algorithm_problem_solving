function solution(arr1, arr2) {
    const answer = [];
    const n = arr1.length;
    const m = arr2[0].length;
    const l = arr2.length;
    
    for (let i = 0; i < n; i++) {
        const result = [];
        for (let j = 0; j < m; j++) {
            let sum = 0
            for (let k = 0; k < l; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            result.push(sum);
        }
        answer.push(result);
    }
    
    
    return answer;
}