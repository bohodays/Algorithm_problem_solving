# 2005 파스칼의 삼각형
# 2022-08-17


T = int(input())

for tc in range(1, T+1):

    N = int(input())
    t = [[0] * N for _ in range(N)]
    
    for i in t:
        i[0] = 1

    for i in range(1, N):
        for j in range(1, N):
            t[i][j] = t[i-1][j-1] + t[i-1][j]
    
    print('#{}'.format(tc))
    for i in t:
        for j in i:
            if j != 0:
                print(j, end=' ')
        print()   