function solution(record) {
    const answer = [];
    const uidToNameMap = new Map();
    for (const row of record) {
        const [type, uid, name] = row.split(" ");
        if (type === "Enter" || type === "Change") {
            uidToNameMap.set(uid, name);
        }
    }
    
    for (const row of record) {
        const [type, uid, name] = row.split(" ");
        if (type === "Enter") {
            answer.push(`${uidToNameMap.get(uid)}님이 들어왔습니다.`);
        } else if (type === "Leave") {
            answer.push(`${uidToNameMap.get(uid)}님이 나갔습니다.`);
        }
    }
    
    return answer;
}