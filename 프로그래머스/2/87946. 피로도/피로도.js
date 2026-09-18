function solution(k, dungeons) {
    let answer = 0;
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    
    const dfs = (count, curr) => {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < n; i++) {
            const [need, use] = dungeons[i];
            if (!visited[i] && curr >= need) {
                visited[i] = true;
                dfs(count + 1, curr - use);
                visited[i] = false;
            }
            
        }
    }
    
    dfs(0, k);
    
    return answer;
}