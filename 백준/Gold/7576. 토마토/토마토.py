#7576 토마토
from collections import deque
import sys

def bfs():
    queue = deque()
    for i, j in tomato:
        queue.append((i, j))
    
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M:
                if box[nx][ny] == 0:
                    box[nx][ny] = box[x][y] + 1
                    queue.append((nx, ny))

M, N = map(int, input().split())

box = []
for _ in range(N):
    box.append(list(map(int, sys.stdin.readline().split())))

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 토마토 좌표 찾기
tomato = []
for i in range(N):
    for j in range(M):
        if box[i][j] == 1:
            tomato.append((i,j))

bfs()

maxV = 0
flag = False
for i in range(N):
    for j in range(M):
        if box[i][j] == 0:
            flag = True
        else:
            if box[i][j] > maxV:
                maxV = box[i][j]

if flag:
    print(-1)
else:
    print(maxV-1)
    