function solution(record) {
    let answer = [];
    
    const idCheck = {};
    const result = []
    for (const item of record) {
        const [cmd, id, nickname] = item.split(" ");
        
        if (cmd === "Enter") {
            idCheck[id] = nickname;
            result.push([id, "님이 들어왔습니다."]);   
        } else if (cmd === "Leave") {
            result.push([id, "님이 나갔습니다."])   
        } else {
            idCheck[id] = nickname;            
        }
    }
    
    for (const item of result) {
        answer.push(idCheck[item[0]] + item[1]);
    }
    
    return answer;
}