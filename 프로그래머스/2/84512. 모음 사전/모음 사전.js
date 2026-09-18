function solution(word) {
    var answer = 0;
    const wordRef = [];
    const ref = "AEIOU";
    
    const dfs = (result) => {
        if (result.length) wordRef.push(result);
        
        if (result.length === 5) return;
        
        for (let i = 0; i < ref.length; i++) {
            dfs(result + ref[i]);
        }
    }
    
    dfs("");
    
    return wordRef.indexOf(word) + 1;
}