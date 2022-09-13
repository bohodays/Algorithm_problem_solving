# 1861 정사각형 방
# 2022-09-13

from collections import deque

# 이동할 4가지 방향 설정(상하좌우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    cnt = 0
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        cnt += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N:
                if graph[x][y] + 1 == graph[nx][ny]:
                    queue.append((nx, ny))
    return cnt
T = int(input())

for tc in range(1, T+1):

    N = int(input())

    graph = [list(map(int, input().split())) for _ in range(N)]

    ans = [graph[0][0], bfs(0,0)]
    for i in range(N):
        for j in range(N):
            tmp = bfs(i,j)
            if tmp > ans[1]: 
                ans[0] = graph[i][j]
                ans[1] = tmp
            elif tmp == ans[1]:
                ans[0] = min(graph[i][j], ans[0])
    print('#{}'.format(tc), *ans)