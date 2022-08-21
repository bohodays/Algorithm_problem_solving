# 10157 자리배정

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]
a = 0   # 방향키

C, R = map(int, input().split())
K = int(input())
i, j = R-1, 0     # 시작 위치
hall = [[0] * C for _ in range(R)]

if K > C*R:
    print(0)
else:
    for n in range(1, K+1):
        hall[i][j] = n
        if n == K:
            print(j+1, R-i)
        i += di[a]
        j += dj[a]
        if i < 0 or i == R or j < 0 or j == C or hall[i][j] != 0:
            i -= di[a]
            j -= dj[a]
            a = (a+1) % 4
            i += di[a]
            j += dj[a]
