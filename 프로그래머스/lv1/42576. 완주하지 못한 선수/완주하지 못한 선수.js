function solution(participant, completion) {
    let ans;
    participant.sort();
    completion.sort();
    console.log(participant, completion)
    if (!completion.includes(participant[participant.length - 1])) {
        return participant[participant.length - 1]
    }
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return participant[participant.length - 1]
}