# 17141 연구소2

from collections import deque
from itertools import combinations

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
N, M = map(int, input().split())

grid = [list(map(int, input().split())) for _ in range(N)]

# 벽
wall = []
# 바이러스 후보
virus_list = []

for i in range(N):
    for j in range(N):
        if grid[i][j] == 1:
            wall.append((i,j))
        elif grid[i][j] == 2:
            virus_list.append((i, j))
            grid[i][j] = 0

res = float('inf')
for virus in combinations(virus_list, M):
    visited = [[0] * N for _ in range(N)]

    v = deque(virus[:])
    for x,y in virus:
        grid[x][y] = 2
        visited[x][y] = 1
    cnt = M + len(wall)

    while v:
        x, y = v.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if grid[nx][ny] == 0:
                    visited[nx][ny] = visited[x][y] + 1
                    v.append((nx,ny))
                    cnt += 1

            if N**2 - cnt == 0:
                tmp = 0
                for  r in range(N):
                    tmp = max(max(visited[r]), tmp)

                if tmp < res:
                    res = tmp
                break
    for x,y in virus:
        grid[x][y] = 0

if res >= 10e9:
    print(-1)
else:
    print(res-1)
