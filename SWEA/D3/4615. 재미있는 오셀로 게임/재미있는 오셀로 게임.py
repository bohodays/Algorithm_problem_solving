# 좌표 두개 + 흑백 유무 (흑 1, 백2)


T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())

    table = [[0] * N for _ in range(N)]

    table[N//2-1][N//2-1] = 2
    table[N//2-1][N//2] = 1
    table[N//2][N//2-1] = 1
    table[N//2][N//2] = 2

    # 상하좌우 대각선
    dx = [-1, 1, 0, 0, -1, 1, 1, -1]
    dy = [0, 0, -1, 1, 1, 1, -1, -1]

    for _ in range(M):
        x, y, d = map(int, input().split())
        table[x-1][y-1] = d

        for i in range(8):
            tmp = []
            for j in range(1, N):
                nx = (x-1) + dx[i] * j
                ny = (y-1) + dy[i] * j
                if 0 <= nx < N and 0 <= ny < N:
                    if table[nx][ny] == 0:
                        tmp = []
                        break
                    elif table[nx][ny] != table[x-1][y-1] and table[nx][ny] != 0:
                        tmp.append([nx, ny])
                    elif table[nx][ny] == table[x-1][y-1]:
                        for k in tmp:
                            table[k[0]][k[1]] = d
                        tmp = []
                        break

        # for i in table:
        #     print(i)
        # print()

    b, w = 0, 0
    for i in range(N):
        for j in range(N):
            if table[i][j] == 1:
                b += 1
            elif table[i][j] == 2:
                w += 1


    print(f'#{tc} {b} {w}')







