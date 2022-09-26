# 1520 내리막 길

import sys
sys.setrecursionlimit(10**6)

def DFS(x, y):
    if dp[x][y] != -1:
        return dp[x][y]

    cnt = 0
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < M and 0 <= ny < N:
            if arr[nx][ny] < arr[x][y]:
                cnt += DFS(nx, ny)
    dp[x][y] = cnt

    return dp[x][y]


M, N = map(int, sys.stdin.readline().split())

arr = []
for _ in range(M):
    arr.append(list(map(int, sys.stdin.readline().split())))

dp = [[-1] * N for _ in range(M)]
dp[M-1][N-1] = 1

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


print(DFS(0, 0))