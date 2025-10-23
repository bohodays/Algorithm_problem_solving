function solution(record) {
    const answer = [];
    const NicknameRecord = {};
    const result = [];
    
    record.forEach((item) => {
        const [cmd, id, nickname] = item.split(" ");
        result.push([cmd, id]);
        if (cmd === "Enter" || cmd === "Change") NicknameRecord[id] = nickname;
    })
   
    result.forEach((item) => {
        const [cmd, id] = item;
        if (cmd === "Enter") answer.push(NicknameRecord[id] + "님이 들어왔습니다.");
        else if (cmd === "Leave") answer.push(NicknameRecord[id] + "님이 나갔습니다.");
    })
    
    return answer;
}