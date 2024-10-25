function solution(name, yearning, photo) {
    const answer = [];
    const ref = {};
    name.forEach((item, index) => {
        ref[item] = yearning[index];
    })
    
    photo.forEach((item) => {
        let result = 0
        item.forEach((targetName) => {
            result += ref[targetName] || 0;
        })
        answer.push(result);
    })
    return answer;
}