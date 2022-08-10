# 1209 Sum
# 2022-08-10


def maxV(arr):
    maxV = 0
    for i in arr:
        if maxV < i:
            maxV = i
    return maxV

for _ in range(1, 11):

    tc = int(input())
    arr = [list(map(int,input().split())) for _ in range(100)]

    ans = []

    # 행 우선 순회
    for i in range(100):
        total = 0
        for j in range(100):
            total += arr[i][j]
        ans.append(total)
        
    
    # 열 우선 순회
    for i in range(100):
        total = 0
        for j in range(100):
            total += arr[j][i]
        ans.append(total)
    
    # 각 대각선의 합
    total = 0
    for i in range(10):
        total += arr[i][i]
    ans.append(total)

    print('#{} {}'.format(tc, maxV(ans)))
