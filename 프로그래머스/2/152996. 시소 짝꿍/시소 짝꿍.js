function solution(weights) {
    let answer = 0;
    const ratio = [1, 3/2, 2, 2/3, 4/3, 1/2, 3/4];
    const weightsObject = {};
    
    weights.forEach((weight) => {
        ratio.forEach((s) => {
            if (weightsObject[weight * s]) {
                answer += weightsObject[weight * s];
            }
        })
        
        weightsObject[weight] = weightsObject[weight] ? weightsObject[weight] + 1 : 1;
    })
    
    return answer;
}