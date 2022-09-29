# 2636 치즈

from collections import deque


def BFS(x, y):
    queue = deque()
    queue.append((x, y))
    visited[x][y] = True
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    cnt = 0

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 범위 안에 해당하는지 확인
            if 0 <= nx < n and 0 <= ny < m:
                # 방문 여부 확인
                if not visited[nx][ny]:
                    # 탐색지점이 0이면 방문 처리하고 큐에 삽입
                    if graph[nx][ny] == 0:
                        visited[nx][ny] = True
                        queue.append((nx, ny))
                    # 탐색지점이 1이면 0으로 바꿔주고 방문처리
                    # 큐에 삽입하지 않는다.
                    elif graph[nx][ny] == 1:
                        graph[nx][ny] = 0
                        visited[nx][ny] = True
                        cnt += 1
    # 카운트 저장
    ans.append(cnt)
    return cnt

n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))


ans = []
time = 0
while True:
    time += 1
    visited = [[False] * m for _ in range(n)]
    cnt = BFS(0, 0)
    if cnt == 0:
        break

print(time-1) 
print(ans[-2])


