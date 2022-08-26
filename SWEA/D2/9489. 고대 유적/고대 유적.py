# 고대유적

# 가로 검사
def check(arr, N, M):
    total = 0

    for i in range(N):
        tmp = 0
        for j in range(M):
            if arr[i][j] == 1:
                tmp += 1
            if arr[i][j] == 0 or j == M-1:
                if tmp >= total:
                    total = tmp
                tmp = 0

    for i in range(M):
        tmp = 0
        for j in range(N):
            if arr[j][i] == 1:
                tmp += 1
            if arr[j][i] == 0 or j == N - 1:
                if tmp >= total:
                    total = tmp
                tmp = 0

    return total



T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())

    table = []
    for _ in range(N):
        table.append(list(map(int,input().split())))

    print('#{} {}'.format(tc, check(table, N, M)))
