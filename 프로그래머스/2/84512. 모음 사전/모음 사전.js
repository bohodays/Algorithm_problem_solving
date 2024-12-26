function solution(word) {
    const vowel = ["A", "E", "I", "O", "U"];
    const dictionary = {};
    let index = 1;
    
    const dfs = (word) => {
        // 종료조건
        if (word.length === 5) return;
        
        for (const item of vowel) {
            const nextWord = word + item;
            dictionary[nextWord] = index;
            index++;
            dfs(nextWord);
        }
    }
    
    dfs("");
    
    return dictionary[word];
}