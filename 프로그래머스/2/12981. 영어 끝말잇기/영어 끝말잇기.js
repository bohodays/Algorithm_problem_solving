function solution(n, words) {
    const answer = [];
    let count = 0;
    
    let prevWord = words[0];
    const isExistWord = {
        [prevWord]: true
    };
    for (let i = 1; i < words.length; i++) {
        const targetWord = words[i];
        count++;
        
        // 3번 규칙 확인
        if (prevWord[prevWord.length - 1] !== targetWord[0]) {
            return [(count % n) + 1, Math.ceil((count + 1) / n)];
        }
        
        // 4번 규칙 확인
        if (isExistWord[targetWord]) {
            return [(count % n) + 1, Math.ceil((count + 1) / n)];
        }
        
        prevWord = targetWord;
        isExistWord[targetWord] = true;
        
    }
        
    return [0, 0];
}