def DFS(x, y):
    global result, cnt
    # visited[x][y] = True
    cnt += 1

    result = max(result, cnt)

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if arr[nx][ny] < arr[x][y]:
                DFS(nx, ny)
                cnt -= 1

T = int(input())

for tc in range(1, T+1):
    N, K = map(int, input().split())

    # 지도정보 입력받으면서 최대값 찾기
    maxV = 0
    arr = []
    for i in range(N):
        tmp = list(map(int, input().split()))
        if max(tmp) >= maxV:
            maxV = max(tmp)
        arr.append(tmp)
    
    # 시작지점 입력받기
    startPoint = []
    for i in range(N):
        for j in range(N):
            if arr[i][j] == maxV:
                startPoint.append((i,j))

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    ans = 0
    for k in range(K+1):
        for i in range(N):
            for j in range(N):
                arr[i][j] -= k
                for x,y in startPoint:
                    result = 0
                    cnt = 0
                    DFS(x, y)
                    if result > ans:
                        ans = result
                arr[i][j] += k

    print('#{} {}'.format(tc, ans))