# 2105 디저트 카페
# 2022-09-23

def DFS(x, y, arr, direction):
    global cnt, i, j
    if direction == 3 and x == i and y == j and len(arr) > 2:
        cnt = max(cnt, len(arr))
        return

    if 0 <= x < N and 0 <= y < N:
        if table[x][y] not in arr:
            arr = arr + [table[x][y]]

            nx = x + dx[direction]
            ny = y + dy[direction]
            DFS(nx, ny, arr, direction)

            if direction < 3:
                nx = x + dx[direction+1]
                ny = y + dy[direction+1]
                DFS(nx, ny, arr, direction+1)


T = int(input())

for tc in range(1, T+1):
    N = int(input())

    table = []
    for _ in range(N):
        table.append(list(map(int, input().split())))

    ans = []
    dx = [1, 1, -1, -1]
    dy = [1, -1, -1, 1]
    cnt = -1
    for i in range(N):
        for j in range(N):
            visited = []
            DFS(i, j, visited, 0)

    print('#{} {}'.format(tc, cnt))