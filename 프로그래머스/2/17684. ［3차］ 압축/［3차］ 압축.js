function solution(msg) {
    const wordMap = new Map();
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((word, i) => wordMap.set(word, i + 1));
    let id = 27;
    const answer = [];
    
    let i = 0;
    while (i < msg.length) {
        let j = i + 1;
        
        let curr = msg[i];
        // 색인 확인
        while (wordMap.has(curr + msg[j])) {
            curr += msg[j];
            j++;            
        }
        
        if (!wordMap.has(curr + msg[j])) {
            // 색인 등록
            wordMap.set(curr + msg[j], id++);
            answer.push(wordMap.get(curr));
            i++;
        }
        
        i += (j - i);
        
    }
    
    return answer;
}