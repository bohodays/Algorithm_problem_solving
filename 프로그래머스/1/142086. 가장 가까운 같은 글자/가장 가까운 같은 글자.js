function solution(s) {
    const answer = [];
    const ref = {};
    
    [...s].forEach((item, index) => {
        if (!(item in ref)) {
            ref[item] = index;
            answer.push(-1);
        } else {
            answer.push(index - ref[item]);
            ref[item] = index;
        }
    })
    return answer;
}