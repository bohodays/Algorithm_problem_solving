function solution(word) {
    const words = ["A", "E", "I", "O", "U"];
    const vowel = [];
    
    const dfs = (current) => {
        if (current.length) {
            vowel.push(current);
        }
        
        // 종료조건
        if (current.length === 5) return;
        
        for (const word of words) {
            dfs(current + word);
        }
    }
    
    dfs("")
    
    const answer = vowel.indexOf(word) + 1
    return answer;
}