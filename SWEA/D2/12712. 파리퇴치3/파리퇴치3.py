# 12712 파리퇴치3
# 2022-08-12

T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())

    mus = [] 
    for i in range(N):
        mus.append(list(map(int, input().split())))

    # 상하좌우 M칸
    result = []
    di = [0, 1, 0, -1]
    dj = [1, 0, -1, 0]
    for i in range(N):
        for j in range(N):
            total = 0
            total += mus[i][j]
            for d in range(1, M):
                for k in range(4):
                    ni = i + di[k] * d
                    nj = j + dj[k] * d
                    if (0 <= ni < N) and (0 <= nj < N):
                        total += mus[ni][nj]
            result.append(total)

    # 대각선 M칸
    di = [-1, 1, 1, -1]
    dj = [1, 1, -1, -1]
    for i in range(N):
        for j in range(N):
            total = 0
            total += mus[i][j]
            for d in range(1, M):
                for k in range(4):
                    ni = i + di[k] * d
                    nj = j + dj[k] * d
                    if (0 <= ni < N) and (0 <= nj < N):
                        total += mus[ni][nj]
            result.append(total)

    maxV = 0
    for i in result:
        if maxV < i:
            maxV = i
    print('#{} {}'.format(tc, maxV))