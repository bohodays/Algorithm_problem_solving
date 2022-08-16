# 1859 백만 장자 프로젝트
# 2022-08-16

def maxV(arr):
    maxV = 0
    for i in arr:
        if maxV < i:
            maxV = i
    return maxV

def sumV(arr):
    total = 0
    for i in arr:
        total += i
    return total


T = int(input())

for tc in range(1, T+1):

    N = int(input())

    m = list(map(int, input().split()))


    ans = []
    while len(m) != 0:
        maxIdx = m.index(maxV(m))
        tmp = m[:maxIdx]
        ans.append(m[maxIdx] * len(m[:maxIdx]) - sumV(m[:maxIdx]))
        del m[:maxIdx+1]

    print('#{} {}'.format(tc, sumV(ans)))





