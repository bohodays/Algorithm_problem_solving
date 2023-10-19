function solution(word) {
    const wordObj = {};
    const vowels = ["A", "E", "I", "O", "U"];
    let index = 1
    
    const dfs = (count, words) => {
        if (count === 5) return;
        
        for (const item of vowels) {
            wordObj[words + item] = index;
            index++;
            dfs(count + 1, words + item)
        }
        
    }
    
    dfs(0, "")
    return wordObj[word];
}