# 달팽이 숫자

T = int(input())

for tc in range(1, T+1):

    N = int(input())

    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    a = 0
    x, y = 0, 0

    ans = [[0] * N for _ in range(N)]
    ans[0][0] = 1
    for i in range(2, N*N+1):
        nx = x + dx[a]
        ny = y + dy[a]
        if 0 > nx or nx >= N or 0 > ny or ny >= N or ans[nx][ny] != 0:
            a = (a+1) % 4
            nx = x + dx[a]
            ny = y + dy[a]
            ans[nx][ny] = i
            x, y = nx, ny
        else:
            ans[nx][ny] = i
            x, y = nx, ny

    print('#{}'.format(tc))
    for i in ans:
        print(*i)
            