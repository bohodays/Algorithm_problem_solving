function solution(lines) {
    const result = {};
    
    lines.forEach((line) => {
        for (let i = line[0]; i < line[1]; i++) {
            result[i] = result[i] ? result[i] + 1 : 1;
        }
    })
    
    let answer = 0;
    for (const item in result) {
        if (result[item] >= 2) {
            answer += 1
        }
    }
    return answer;
}