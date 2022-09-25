# 정사각형 방

def DFS(x, y):
    global cnt, ans
    cnt += 1

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if arr[x][y] + 1 == arr[nx][ny]:
                DFS(nx, ny)

T = int(input())

for tc in range(1, T+1):

    N = int(input())

    arr = []
    for _ in range(N):
        arr.append(list(map(int, input().split())))

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    ans = [float('inf'), 0]
    for i in range(N):
        for j in range(N):
            cnt = 0
            DFS(i, j)
            if cnt > ans[1]:
                ans[0] = arr[i][j]
                ans[1] = cnt
            elif cnt == ans[1]:
                ans[0] = min(ans[0], arr[i][j])
    
    print('#{}'.format(tc), *ans)