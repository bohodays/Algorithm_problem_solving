def dfs(computers, visited, target, n):
    visited[target] = True
    
    for connect in range(n):
        # 방문하지 않았고 연결되어있다면
        if not visited[connect] and computers[target][connect] == 1:
            dfs(computers, visited, connect, n)
    

def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    for i in range(n):
        if not visited[i]:
            answer += 1
            dfs(computers, visited, i, n)
            
    return answer