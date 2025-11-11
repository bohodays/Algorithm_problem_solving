function solution(array, commands) {
    const answer = [];
    
    commands.forEach(([i, j, k]) => {
        const result = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(result[k - 1]);
    })
    
    return answer;
}