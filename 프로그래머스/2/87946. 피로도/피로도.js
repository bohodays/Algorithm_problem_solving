function solution(k, dungeons) {
    let answer = 0;
    const n = dungeons.length;
    const visited = Array(n).fill(false);

    const dfs = (count, k) => {
        
        for (let i = 0; i < n; i++) {
            const [need, cost] = dungeons[i];
            if (!visited[i] && k >= need) {
                visited[i] = true;
                dfs(count + 1, k - cost);
                visited[i] = false;
            }
        }
        
        answer = Math.max(answer, count);
    }
    
    dfs(0, k);
    
    return answer;
}