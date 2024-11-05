function solution(participant, completion) {
    const ref = {};
    completion.forEach((item) => {
        if (item in ref) {
            ref[item] += 1;
        } else {
            ref[item] = 1;
        }
    })
    
    for (const target of participant) {
        if (!ref[target]) {
            return target;
        } else {
            ref[target] -= 1;
        }
    }
    
}