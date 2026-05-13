function solution(participant, completion) {
    let answer = '';
    const completionRef = {};
    
    participant.forEach((person) => {
        completionRef[person] = completionRef[person] ? completionRef[person] + 1 : 1;
    });
    
    completion.forEach((person) => {
        completionRef[person] -= 1
    });
    
    for (const [key, value] of Object.entries(completionRef)) {
        if (value === 1) {
            answer = key;
            break;
        }
    }
    
    return answer;
}