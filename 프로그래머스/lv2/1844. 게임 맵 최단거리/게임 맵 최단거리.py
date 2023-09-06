from collections import deque

def solution(maps):
    answer = 0
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    n, m = len(maps), len(maps[0])
    
    queue = deque()
    queue.append([0, 0])
    
    visited = [[0 for i in range(m)] for j in range(n)]
    visited[0][0] = 1
    
    while len(queue):
        x, y = queue.popleft()
        
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if not visited[nx][ny] and maps[nx][ny] == 1:
                    queue.append([nx, ny])
                    visited[nx][ny] = visited[x][y] + 1
                    
    return visited[n - 1][m - 1] if visited[n - 1][m - 1] else -1