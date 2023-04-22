function solution(name, yearning, photo) {
    const answer = [];
    const pointObj = {};
    
    for (let i = 0; i < name.length; i++) {
        pointObj[name[i]] = yearning[i]
    }
    
    photo.forEach((item) => {
        let point = 0;
        item.forEach((name) => {
            if (pointObj[name]) point += pointObj[name];
        })
        answer.push(point)
    })
    
    return answer;
}