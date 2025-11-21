function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    const result = [];
    
    const dfs = (currentWord, count) => {
        result.push(currentWord);
        
        // 종료조건
        if (currentWord.length === 5) return;
        
        for (let i = 0; i < vowels.length; i++) {
            dfs(currentWord + vowels[i], count + 1);
        }
    }
    
    dfs("", 0);
    
    return result.indexOf(word);
}