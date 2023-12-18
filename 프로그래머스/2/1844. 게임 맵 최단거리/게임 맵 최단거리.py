from collections import deque

def solution(maps):
    answer = 0
    queue = deque([(0, 0)])
    n, m = len(maps), len(maps[0])
    # 방문 여부 확인을 위한 배열 생성
    visited = [[0] * m for _ in range(n)]
    visited[0][0] = 1 # 출발점 방문 처리
    
    # 4방향 설정
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    while queue:
        x, y = queue.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 범위가 유효한지 확인
            if (0 <= nx < n) and (0 <= ny < m):
                # 방문 여부 및 지나갈 수 있는 칸인지 확인
                if not visited[nx][ny] and maps[nx][ny]:
                    visited[nx][ny] = visited[x][y] + 1
                    queue.append([nx, ny])
                    
    return visited[n - 1][m - 1] if visited[n - 1][m - 1] else -1