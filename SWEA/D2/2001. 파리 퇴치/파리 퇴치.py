# 2001 파리 퇴치
# 2022-08-11



def maxV(arr):
    maxVal = 0
    for i in arr:
        if maxVal < i:
            maxVal = i
    return maxVal

T = int(input())

for tc in range(1, T+1):

    N, M = map(int, input().split())

    m = []
    for _ in range(N):
        m.append(list(map(int,input().split())))

    kill = []
    for i in range(N-M+1):
        for j in range(N-M+1):
            result = 0
            for k in range(M):
                for l in range(M):
                    result += m[i+k][j+l]
            kill.append(result)


    ans = maxV(kill)

    print('#{} {}'.format(tc, ans))


