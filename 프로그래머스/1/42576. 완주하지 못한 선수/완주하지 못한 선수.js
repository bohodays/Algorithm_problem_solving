function solution(participant, completion) {
    var answer = '';
    const checkMap = {};
    
    participant.forEach((person) => {
        checkMap[person] = checkMap[person] ? checkMap[person] + 1 : 1;
    });
    
    completion.forEach((person) => {
        checkMap[person] = checkMap[person] ? checkMap[person] - 1 : 0;
    })
    
    for (const [key, value] of Object.entries(checkMap)) {
        if (value === 1) {
            return key
        }
    }
}