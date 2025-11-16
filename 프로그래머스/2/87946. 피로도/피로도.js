function solution(k, dungeons) {
    let answer = 0;
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    
    const dfs = (k, count) => {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < n; i++) {
            const [need, cost] = dungeons[i];
            if (k >= need) {
                if (!visited[i]) {
                    visited[i] = true;
                    dfs(k - cost, count + 1);
                    visited[i] = false;
                }
            }
        }
        
    }
    
    dfs(k, 0)
    
    return answer;
}