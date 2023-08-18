function solution(k, dungeons) {
    const length = dungeons.length;
    const visited = Array(dungeons.length).fill(false);
    let answer = 0;
    let temp = 0;
    
    const dfs = (k ,count) => {
        for (let i = 0; i < length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], count + 1)
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
        return
    }
    
    dfs(k, 0)
    
    return answer
}