function solution(array, commands) {
    const answer = [];
    
    commands.forEach((item) => {
        const [i, j, k] = item;
        const targetArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(targetArray[k - 1]);    
    })
    
    return answer;
}